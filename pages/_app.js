import '../styles/globals.css'
import Layout from '../components/AppLayout/AppLayout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
