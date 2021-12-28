import Head from 'next/head'
import Main from '../../components/Ventas/Main'

export default function Ventas() {
    return(
        <>
        <Head>
        <title>Guzzi Autos - Ventas</title>
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/images/car.ico" />
        </Head>
        <section className="ventas_container">
            <Main />
        </section>
        <style jsx>{`
            .ventas_container {
                height:80vh;
                width:100vw;
                background:url('https://c.tenor.com/5wo1KP_631sAAAAC/mclaren-racing.gif') no-repeat center;
                background-size:cover;
                overflow-y:scroll;
                position:relative;
            }
        `}</style>
        </>
    )
}

// Ventas, consignaciones y si lo quieren vender te lo compramos. (Efectivo) Asesoramiento personalizado Financiaciones
