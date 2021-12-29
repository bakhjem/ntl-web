import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../css/home.css'
import Head from 'next/head';
import '../css/tracking.css'
import '../css/main.css'
import LayoutWrapper from '../components/LayoutWrapper';
// import 'bootstrap/dist/css/bootstrap.css';
import '../css/boostrap.css'
// import "bootstrap/dist/js/bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>

    </ChakraProvider>
  )
}

export default MyApp
