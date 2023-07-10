import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider ,ColorModeScript} from '@chakra-ui/react'
import Navbar2 from '@/components/Navbar2'
import Footer from '../components/Footer'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div>
    <>

  <ChakraProvider>
  <ColorModeScript initialColorMode='light'></ColorModeScript>
  <Navbar2></Navbar2>
  <Component {...pageProps} />
  <Footer></Footer>
  </ChakraProvider>

  </>
  )
}
