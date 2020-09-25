import firebase from "firebase";
import { mockSpendings } from "../constants/mockSpendings";

const changeMockCurrency = mockSpendings.map(spending => {
    const currencies = ['MYR', 'NOK','PHP','PLN','EUR','RUB','SEK', 'USD']
   return {
       ...spending,
       currency: currencies[Math.floor(Math.random() * (6 - 0 + 1)) + 0]
   }
})

export const createDemoUser = async () => {
    firebase.auth().signInAnonymously()
            .then(() => {
                const user = firebase.auth().currentUser
                if (user) {
                    const uid = firebase.auth().currentUser.uid
                    const walletRef = firebase.database().ref(`users/${uid}/budget/wallet/`)
                    const spendingsRef = firebase.database().ref(`users/${uid}/budget/spendings/`)
                    spendingsRef.set(changeMockCurrency)
                    walletRef.set({
                        budget: [
                                    {amount: 25000,
                                    currency: "PLN"}
                                ] ,
                            mainCurrency : "PLN"
                        }
                    )
                }
            })
            .catch(({ message }) => {
                    console.log(message);
            }
            );
}
