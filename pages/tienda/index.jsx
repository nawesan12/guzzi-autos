import Head from 'next/head'

import Image from 'next/image'

export default function Tienda() {
    return(
        <>
        <Head>
        <title>Guzzi Autos - Tienda</title>
        <meta charset="utf-8"/>
        <meta name="description" content="Somos una empresa dedicada a la limpieza, mantenimiento y venta de automoviles! No dudes en consultarnos. Guzzi Autos."/>
        <meta name="keywords" content="Guzzi autos, lavado, autos, auto, lavado de auto partes autopartes, lavado, lavanderia de coches, guzzi, mar del plata"/>
        <meta name="author" content="Nahuel Santillan Web Developer" />
        <meta name="copyright" content="Ricardo Guzzi - Guzzi Autos" />
        <meta name="description" content="Pagina web para Guzzi Autos" />
        <link rel="icon" href="/images/car.ico" />
        </Head>
        <section>
            <h1>PROXIMAMENTE</h1>
            <div>
                <Image src="/images/proximamente.svg" alt="Proximamente Guzzi Autos Tienda" layout="fill" object-fit="cover"/>
            </div>
        </section>

        <style jsx>{`
            section {
                display:flex;
                align-items:center;
                justify-content:space-between;
                height:80vh;
                width:100vw;
                flex-direction:column;
            }    

            div {
                position:relative;
                width:85vw;
                height:85vw;
            }

            h1 {
                font-size:1.8rem;
                margin-top:25vh;
                padding:1rem;
                border:5px dashed black;
                border-radius:.5rem;
            }
        `}</style>
        </>
    )
}   