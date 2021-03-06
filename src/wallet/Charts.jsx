import React from 'react'
import PieChart from "react-minimal-pie-chart"
import randomColor from 'randomcolor'
import { Header } from 'semantic-ui-react'
import {currencyColors} from '../constants/colors'

const Charts = ({wallet, spent}) => {

       const chartData = [{
        color: "#E38627",
        title: "Spent",
        value: spent.spentSum
        },
        {
        color: "#00b5ad",
        title: "Remaining",
        value: wallet.budget[0].amount - spent.spentSum
        }
    ]   

        const spentCurr = Object.entries(spent.spentCalculated).map(amount => {
            return {
                color: currencyColors[amount[0]],
                title: amount[0],
                value: amount[1]
        }
        })

    return <> 
    <Header>Total budget</Header>
    <PieChart
        animate
        center={[50, 50]}
        data={chartData}
        label={(data) => `${parseFloat(data.data[data.dataIndex].percentage).toFixed(1)}% ${data.data[data.dataIndex].title}`}
        labelPosition={68}
        lineWidth={20}
        paddingAngle={0}
        radius={30}
        rounded
        startAngle={0}
        viewBoxSize={[130, 110]}
        labelStyle={{
            fontSize: "5px",
            fill: 'rgba(0, 0, 0, 0.6)' 
        }}
        />
    <Header>Spendings by currency</Header>
    <PieChart
        animate
        center={[50, 50]}
        data={spentCurr}
        label={(data) => `${parseFloat(data.data[data.dataIndex].percentage).toFixed(1)}% ${data.data[data.dataIndex].title}`}
        labelPosition={105}
        lineWidth={40}
        paddingAngle={2}
        radius={30}
        startAngle={0}
        viewBoxSize={[130, 90]}
        labelStyle={{
            fontSize: "4px",
            fill: "#00b5ad"    
        }}
        />
        </>
}



export default Charts