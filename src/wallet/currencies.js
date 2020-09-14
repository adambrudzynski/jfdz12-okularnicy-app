import axios from 'axios'

export const getRates = async (mainCurrency) => {
    try {
        const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${mainCurrency}`)
        // const currencies = Object.keys(data.rates).map(rate => {
        //     return { text: rate, value: rate, key: rate }
        // })
        return data
    }
    catch (error) {
        return error
    }
}

export const exchange = (amount, fromCurr, toCurr, rates) => {
    // // if (rates) {
    //     console.log("exchange()", {
    //         amount, fromCurr, toCurr, rates
    //     });
        return (amount/rates.rates[fromCurr])
    // }
    // else {
    //     const rates = await getRates(toCurr)
    //     return (amount/rates.rate[fromCurr])
    // }
}

const objPpertySum = (obj) => {
    const objPpertySum = Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
    // console.log('objPpertySum2222',objPpertySum);
    return objPpertySum
}

const calcSpent = (spent) => {
    const calculateSpent = objPpertySum(spent)   
    // console.log('calculateSpent', calculateSpent);
    return parseFloat(calculateSpent).toFixed(2)
}

export  const calculateSpent = (list, curr) => {
    // console.log(curr);
    let spent = {}
    let spentCalculated = {}

    list.reduce((acc, val)=> {
         const o = acc.filter((obj)=>{
             return obj.currency===val.currency;
         }).pop() || {currency:val.currency, amount:0, amountInBaseCurr: 0};
         o.amountInBaseCurr += (val.amount * val.rates.rates[curr])
         o.amount += val.amount;
         !acc.includes(o) && acc.push(o);
         spent[o.currency] = o.amount
        //  console.log('o', o)
         spentCalculated[o.currency] =  o.amountInBaseCurr 
         return acc;
     },[]);
     const spentSum = parseInt(calcSpent(spentCalculated))
      return {spent, spentCalculated, spentSum}
    }

