import Head from 'next/head'

import Main from '../../components/Servicios/Main'
import ServiciosCont from '../../components/Servicios/ServiciosCont'
import Benefits from '../../components/Servicios/Benefits'

export default function Servicios() {
    return(
        <section className="servicios" style={{background:'#292929'}}>
        <Head>
        <title>Guzzi Autos - Servicios</title>
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