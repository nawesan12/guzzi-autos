import '../styles/globals.css'

import Header from '../components/AppLayout/Header'
import Footer from '../components/AppLayout/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
