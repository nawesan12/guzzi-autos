import Head from 'next/head'

import Main from '../components/Home/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guzzi Autos</title>
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
    </>
  )
}
