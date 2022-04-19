import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='mt-10'/>
      {/* <Trending/> */}
      <div className='mt-20'/>
      {/* <CMCtable/> */}
    </div>
  )
}

export default Home
