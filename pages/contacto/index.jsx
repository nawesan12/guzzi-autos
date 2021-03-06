import Main from '../../components/Contacto/Main';
import Head from 'next/head';

export default function Contacto() {
    return(
        <>
        <Head>
            <title>Guzzi Autos - Contacto</title>
            <meta charset="utf-8"/>
            <meta name="description" content="Somos una empresa dedicada a la limpieza, mantenimiento y venta de automoviles! No dudes en consultarnos. Guzzi Autos."/>
            <meta name="keywords" content="Guzzi autos, lavado, autos, auto, lavado de auto partes autopartes, lavado, lavanderia de coches, guzzi, mar del plata"/>
            <meta name="author" content="Nahuel Santillan Web Developer" />
            <meta name="copyright" content="Ricardo Guzzi - Guzzi Autos" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Main/>

        </>
    )
}