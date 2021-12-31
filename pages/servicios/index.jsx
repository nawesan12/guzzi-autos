import Head from 'next/head'

import Main from '../../components/Servicios/Main'
import ServiciosCont from '../../components/Servicios/ServiciosCont'
import Benefits from '../../components/Servicios/Benefits'

export default function Servicios() {
    return(
        <section className="servicios" style={{background:'#292929'}}>
        <Head>
        <title>Guzzi Autos - Servicios</title>
        <meta charset="utf-8"/>
        <meta name="description" content="Somos una empresa dedicada a la limpieza, mantenimiento y venta de automoviles! No dudes en consultarnos. Guzzi Autos."/>
        <meta name="keywords" content="Guzzi autos, lavado, autos, auto, lavado de auto partes autopartes, lavado, lavanderia de coches, guzzi, mar del plata"/>
        <meta name="author" content="Nahuel Santillan Web Developer" />
        <meta name="copyright" content="Ricardo Guzzi - Guzzi Autos" />
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/images/car.ico" />
        </Head>
        <Main />
        <ServiciosCont />
        <Benefits />
        </section>
    )
}

// Acepta mercado pago, cuenta DNI y trasnferencia bancaria