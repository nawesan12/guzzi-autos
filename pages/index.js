import Head from 'next/head'

import AppLayout from '../components/AppLayout/AppLayout'
import HomePage from '../components/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guzzi Autos</title>
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
