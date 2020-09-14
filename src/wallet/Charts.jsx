import React from 'react'
import PieChart from "react-minimal-pie-chart"

const Charts = ({wallet, spent}) => {

       const chartData = [{
        color: "#E38627",
        title: "Spent",
        value: spent.spentSum
        },
        {
        color: "#C13C37",
        title: "Remaining",
        value: wallet.budget[0].amount - spent.spentSum
        }
    ]   

    return <PieChart
        animate
        center={[50, 50]}
        data={chartData}
        label={(data) => `${parseFloat(data.data[data.dataIndex].percentage).toFixed(1)}% ${data.data[data.dataIndex].title}`}
        labelPosition={30}
        lineWidth={15}
        paddingAngle={0}
        radius={45}
        rounded
        startAngle={0}
        viewBoxSize={[130, 130]}
        labelStyle={{
            fontSize: "6px"      
        }}
        />
}



export default Charts