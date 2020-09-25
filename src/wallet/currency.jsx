import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'

export const Currency = ({ handleCurrency, mainCurrency, compact, edit, all }) => {
    const [currencies, setCurrencies] = useState([])
    const [rate, setRate] = useState([])
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(false)
    const [currentCurr, setCurrentCurr] = useState(edit? edit.currency : mainCurrency)

    useEffect(() => {
        getCurrencies(mainCurrency)
    }, [])

    const getCurrencies = async (currency) => {
        try {
            setloading(true)
            const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
            const currencies = Object.keys(data.rates).map(rate => {
                return { text: rate, value: rate, key: rate }
            })
            if (currency === 'EUR') {
                currencies.push({text: "EUR", value: "EUR", key: "EUR"})
            }
            handleCurrency(currency, data.rates[currency], data)
            setRate(data)
            setCurrencies(currencies)
            setloading(false)
            
        }
        catch (error) {
            setloading(false)
            setError(error)
        }
    }

    const handleChange =  (curr) => {
        getCurrencies(curr)
    }
    return <Dropdown
        placeholder='Select'
        compact={compact? true : false}
        fluid
        search
        selection
        loading={loading}
        error={error}
        options={currencies}
        value={currentCurr}
        onChange={(e, { value }) => {
            setCurrentCurr(value)
            handleChange(value)
        }}
    />
}