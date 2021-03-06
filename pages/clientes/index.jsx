import Head from 'next/head'

import Main from '../../components/Clientes/Main'

export default function Clientes() {
    return(
        <>
        <Head>
            <title>Guzzi Autos - Clientes</title>
            <meta charset="utf-8"/>
            <meta name="robots" content="index"/>
            <meta name="description" content="Somos una empresa dedicada a la limpieza, mantenimiento y venta de automoviles! No dudes en consultarnos. Guzzi Autos."/>
            <meta name="keywords" content="Guzzi autos, lavado, autos, auto, lavado de auto partes autopartes, lavado, lavanderia de coches, guzzi, mar del plata"/>
            <meta name="author" content="Nahuel Santillan Web Developer" />
            <meta name="copyright" content="Ricardo Guzzi - Guzzi Autos" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main />
        </>
    )
} 