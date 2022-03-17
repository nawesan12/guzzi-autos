import '../styles/globals.css'

import Header from '../components/AppLayout/Header'
import Footer from '../components/AppLayout/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
