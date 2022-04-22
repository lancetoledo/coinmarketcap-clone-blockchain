import { useState, useEffect} from 'react'
import Header from '../../components/Header'
import CoinDetail from '../../components/CoinDetail'

const Price = () => {
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState('')

    useEffect(()=> {
        getURLData()
    }, [])

    const getURLData = async () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)

        setCoinName(urlParams.get('coin'))
        setPrice(Number(urlParams.get('price')).toLocaleString())
        setCoinSymbol(urlParams.get('symbol'))
    }

return (
    <div>
        <Header />
        <CoinDetail coinName = {coinName} price={price} coinSymbol = {coinSymbol}/>
    </div>
)
}

export default Price