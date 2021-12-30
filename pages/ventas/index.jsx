import Head from 'next/head'
import Main from '../../components/Ventas/Main'
import Presentacion from '../../components/Ventas/Presentacion'

export default function Ventas() {
    return(
        <>
        <Head>
        <title>Guzzi Autos - Ventas</title>
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/images/car.ico" />
        </Head>
        <section className="ventas_container">
            <Presentacion />
            <Main />
        </section>
        <style jsx>{`
            .ventas_container {
                height:80vh;
                width:100vw;
                overflow-y:scroll;
                position:relative;
                overflow-x:hidden;
            }
        `}</style>
        </>
    )
}

// Ventas, consignaciones y si lo quieren vender te lo compramos. (Efectivo) Asesoramiento personalizado Financiaciones
