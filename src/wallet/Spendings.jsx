import React, {useContext} from 'react'
import firebase from 'firebase'
import { Segment } from 'semantic-ui-react'
import SpendingForm from './SpendingForm'
import CardPlaceholder from '../Placeholders/CardPlaceholder'
import { MyContext } from '../auth/Auth';
import { Card } from '../GenericComponents/Card'
import { typeColors } from '../constants/colors'


export default ({ spendings, loading, error, mainCurrency }) => {

  const database = firebase.database()
  const user = useContext(MyContext)
  const uid = user.state.user.uid

  const remove = (id) => {
    database.ref(`users/${uid}/budget/spendings/${id}`).remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    console.log('remove', id);
  }

 

  if (error) return <h2>Error :(</h2>
  if (loading) return <> <CardPlaceholder /><CardPlaceholder /><CardPlaceholder /><CardPlaceholder /> </>
  if (spendings === null) return <>
    <SpendingForm  mainCurrency={mainCurrency} />
    <Segment raised>
    <h3>No spendings yet.</h3>
    <h4>Add some.</h4>
    </Segment>
  </>
  return <>
    <SpendingForm  mainCurrency={mainCurrency} />
    {
      spendings.map(spending => {
        const edit = <SpendingForm edit={spending} mainCurrency={mainCurrency} />
        return <Card 
          color={typeColors[spending.type]} 
          main={spending.amount} 
          secondary={spending.currency} 
          date={`${spending.date} ${spending.hour}`} 
          header={spending.desc} 
          content={spending.place.slice(0, 50)} 
          footer={spending.type} 
          remove={() => remove(spending.id)} 
          key={spending.id}
          edit={edit} />
      })
    }
  </>
}

