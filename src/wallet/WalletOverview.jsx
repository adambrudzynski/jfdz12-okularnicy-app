import React from 'react'
import { Header, Card, Table, Placeholder } from 'semantic-ui-react'
import WalletConf from './WalletConf'



export default ({ wallet, loading, spent, reloadCalc }) => {
    

    const placeholder = () => {
      return  <Placeholder >
             <Placeholder.Line length='short' />
        </Placeholder>
    }
   
    return <>
        <Header>Wallet summary {wallet.budget && <WalletConf reloadCalc={reloadCalc} wallet={wallet}/>}</Header>
        <Card fluid>
            <Card.Content>
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
            </Card.Content>
        </Card>
  </>
}