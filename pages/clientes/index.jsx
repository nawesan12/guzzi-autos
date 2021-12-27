import Head from 'next/head'

import Main from '../../components/Clientes/Main'

export default function Clientes() {
    return(
        <>
        <Head>
        <title>Guzzi Autos - Clientes</title>
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/images/car.ico" />
        </Head>
        <section className="clientes_bg">
            <Main />
        </section>
        <style jsx>{`
            .clientes_bg {
                height:80vh;
                width:100vw;
                background:url('https://c.tenor.com/YuWg88xZWTgAAAAC/audi-r8.gif') no-repeat center center;
                background-size:cover;
                position:relative;
                z-index:0;
                overflow-y:scroll;
            }
        `}</style>
        </>
    )
} 

// Separar por secciones