import React from 'react'
import { Header, Table, Placeholder } from 'semantic-ui-react'
import WalletConf from './WalletConf'
import { Card } from '../GenericComponents/Card'



export default ({ wallet, loading, spent, reloadCalc }) => {
    

    const placeholder = () => {
      return  <Placeholder >
             <Placeholder.Line length='short' />
        </Placeholder>
    }
   
    return <>
       
        {/* <Card fluid>
            <Card.Content> */}
            <Card>
            <Header>Wallet summary {wallet.budget && <WalletConf reloadCalc={reloadCalc} wallet={wallet}/>}</Header>
               <Table basic='very' celled unstackable compact>
                    <Table.Body>
                        <Table.Row>
                                <Table.Cell>
                                    Total budget
                                </Table.Cell>
                                <Table.Cell width={6}>
                                { wallet.budget ? wallet.budget[0].amount : placeholder()} {wallet.mainCurrency}
                                </Table.Cell>
                        </Table.Row>
                        
                        <Table.Row>
                                <Table.Cell>
                                    Avaible budget
                                </Table.Cell>
                                <Table.Cell >
                                    { wallet.budget && spent.spentSum ? `~${wallet.budget[0].amount - spent.spentSum} ${wallet.mainCurrency}`: placeholder()}  
                                </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                                <Table.Cell>
                                    Total spent
                                </Table.Cell>
                                <Table.Cell>
                                { wallet.budget && spent.spentSum ? `~${spent.spentSum} ${wallet.mainCurrency}` : placeholder()} 
                                </Table.Cell>
                        </Table.Row>
                       </Table.Body>
                </Table>                  
            {/* </Card.Content> */}
        </Card>
  </>
}