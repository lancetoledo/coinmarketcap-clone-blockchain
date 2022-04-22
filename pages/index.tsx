import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCTable from '../components/cmc-table/CMCTable'
import SwapCryptoModal from '../components/SwapCryptoModal'
const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <SwapCryptoModal />
      <div className='mt-10'/>
      <Trending/>
      <div className='mt-20'/>
      <CMCTable/>
    </div>
  )
}

export default Home
