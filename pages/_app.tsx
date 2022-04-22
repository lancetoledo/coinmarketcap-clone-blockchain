import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_SERVER)
  console.log(process.env.NEXT_PUBLIC_APP_ID)
  return (
    <MoralisProvider
    serverUrl="https://wu3u2sqdyxs2.usemoralis.com:2053/server"
    appId={"zduFTLlimP4N5DttN0hLDPWo5wyu69pD8C4vqMS2"}
    >
      <GunProvider >
        <CoinMarketProvider>
            <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>


    </MoralisProvider>  
  )
}

export default MyApp
