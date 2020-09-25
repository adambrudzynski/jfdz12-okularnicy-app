import React, { useState, useEffect } from 'react'
import { Grid, Responsive, Button } from 'semantic-ui-react'
import firebase from "firebase";

import WalletOverview from './WalletOverview'
import Spendings from './Spendings'
import { TopHeader } from '../navigation/TopHeader';
import { calculateSpent } from './currencies';
import Charts from './Charts';

export const Wallet = () => {
    const [wallet, setWallet] = useState([])
    const [spent, setSpent] = useState(0)
    const [spendings, setSpendings] = useState([])
    const [loading, setloading] = useState(false)
    const [spendingsLoading, setSpendingsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [spendingError, setSpendingError] = useState(null)
    const [activeMenu, setActiveMenu] = useState(0)

    const mobilemenu = <Button.Group floated='right' style={{'marginRight': '50px'}} >
                             <Button basic={activeMenu === 0 ? false : true } color='teal' onClick={()=> setActiveMenu(0)} icon='list alternate outline'/>
                             <Button basic={activeMenu === 1 ? false : true } color='teal' onClick={()=> setActiveMenu(1)} disabled={wallet.budget && spent? false:true} icon='pie chart' />
                        </Button.Group>

    const uid = firebase.auth().currentUser.uid;
    const spendingsRef = firebase.database().ref(`users/${uid}/budget/spendings/`)
    const walletRef = firebase.database().ref(`users/${uid}/budget/wallet/`)
    
    useEffect(() => {
        getWallet()
        getSpending()
    }, [])
        
    const getWallet = () => {
        setloading(true)
        walletRef.on('value', (snapshot) => {
            let list = snapshot.val()
            if (list) {
               setWallet(list)
               setloading(false)  
            }else if (list === null){
                console.log("Wallet empty", list);
                walletRef.set({
                    budget: [
                                {amount: 0,
                                currency: "PLN"}
                            ] ,
                        mainCurrency : "PLN"
                    }
                )
            }
            
            else {
                setWallet(list)
                setloading(false)
            }
        }) 
    }

    const getData = async (list) => {
        const currency = await walletRef.once('value').then(snapshot=> snapshot.val().mainCurrency)
        setSpent(calculateSpent(list || spendings, currency))
    }


    const getSpending = () => {
        setSpendingsLoading(true)
        spendingsRef.on('value', (snapshot) => {
            let list = snapshot.val()
            if (list) {
                const keys = Object.keys(list);
                const formattedData = keys.map(key => {
                    return {
                        id: key,
                        ...list[key]
                    }
                })
                .reverse()
                setSpendings(formattedData)
                getData(formattedData)
            } else {
                setSpendings(null)
            }
            setSpendingsLoading(false)
        })  
    }

    return <>
        <Responsive maxWidth={650}>
            <TopHeader content='Wallet' subcontent='Manage your budget' mobileMenu={mobilemenu} />
            {activeMenu === 0 
            ?<><WalletOverview reloadCalc={getData} wallet={wallet} loading={loading} spent={spent}/>
            <Spendings spendings={spendings} error={spendingError} loading={spendingsLoading} mainCurrency={wallet.mainCurrency} /></>
            :<Charts wallet={wallet} spent={spent}/>}
        </Responsive>
        <Responsive minWidth={651} >
        <TopHeader content='Wallet' subcontent='Manage your budget'/>
            <Grid columns={2} >
                <Grid.Column >
                    <WalletOverview reloadCalc={getData} wallet={wallet} loading={loading} spent={spent} />
                    <Spendings spendings={spendings} error={spendingError} loading={spendingsLoading} mainCurrency={wallet.mainCurrency}/>
                </Grid.Column>
                <Grid.Column>
                    {wallet.budget && spent && <Charts wallet={wallet} spent={spent}/>}
                        </Grid.Column>
            </Grid>
        </Responsive>
    </>
}