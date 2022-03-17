import Head from 'next/head'

import Main from '../components/Home/Main'

export default function Home() {
  return (
    <>
      <Head>
          <html lang="es" />
          <title>Guzzi Autos</title>
          <meta name="description" content="Pagina web para Guzzi Autos" />
          <link rel="icon" href="/images/car.ico" />
          <meta charset="utf-8"/>
          <meta name="robots" content="index"/>
          <meta name="description" content="Somos una empresa dedicada a la limpieza, mantenimiento y venta de automoviles! No dudes en consultarnos. Guzzi Autos."/>
          <meta name="keywords" content="Guzzi autos, lavado, autos, auto, lavado de auto partes autopartes, lavado, lavanderia de coches, guzzi, mar del plata"/>
          <meta name="author" content="Nahuel Santillan Web Developer" />
          <meta name="copyright" content="Ricardo Guzzi - Guzzi Autos" />
          <meta name="description" content="Pagina web para Guzzi Autos" />
      </Head>

      <Main/>
    </>
  )
}
