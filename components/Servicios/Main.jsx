import Image from 'next/image'

export default function Main() {
    return(
        <>
        <section className="presentation_text">
            <div>
                <h1>Servicios</h1>
                <p>De la mejor calidad</p>
                <h3>Tenemos lo que tu vehiculo necesita</h3>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 7 12 12 17 7" />
                <polyline points="7 13 12 18 17 13" />
            </svg>
        </section>
        <section className="service_presentation"/>
        <section className="payways">
            <div className="payway">
                <Image src="/images/payway/mercadopago.jpg" alt="Mercado Pago" layout="fill" object-fit="cover"/>
            </div>
            <div className="payway">
                <Image src="/images/payway/cuentadni.jpg" alt="Cuebta Dni" layout="fill" object-fit="cover"/>
            </div>
        </section>
        <style jsx>{`
            .service_presentation {
                width:100vw;
                height:100vh;
                background:url('https://i.pinimg.com/originals/05/8a/a6/058aa6c4447a0daf717b7845f09d42c4.gif') no-repeat;
                /*background:url('https://data.whicdn.com/images/101706752/original.gif') no-repeat center center;*/
                /*background:url('https://c.tenor.com/YuWg88xZWTgAAAAC/audi-r8.gif') no-repeat center center;*/
                background-size:cover;
                filter: brightness(0.4);
                position:relative;
                z-index:0;
            }

            svg {
                margin:0 auto;
                animation: bouncing 3s ease 0s infinite normal forwards;
            }

            .presentation_text {
                color:#f5f5f5;
                text-align:center;
                margin:0;
                padding:1rem;
                position:absolute;
                z-index:1;
                width:100vw;
                height:100vh;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
            }    

            .presentation_text h1 {
                font-family: 'Black Ops One', cursive;
                font-size:2.8rem;
                margin-top:5rem;
                margin-bottom:0;
            }

            .presentation_text p {
                font-size:1.1rem;
                margin-top:.5rem;
            }

            .presentation_text h3 {
                font-size:1.3rem;
                text-decoration:underline;
                margin-top:2rem;
            }

            .service_presentation:after {
                content:'';
                color:white;
                position:absolute;
                bottom:0;
                width:100vw;
                height:10vh;
                background: linear-gradient(0deg, #292929 40%, rgba(41,41,41,0.5) 70%, rgba(0,0,0,0) 100%);
            }

            .payways {
                display:flex;
                justify-content: space-around;
                align-items:center;
                margin-top:2rem;
            }

            .payway {
                position:relative;
                width:40%;
                height:5.5rem;
                overflow:hidden;
                border-radius:10%;
            }

            @keyframes bouncing {
                0% {
                    animation-timing-function: ease-in;
                    opacity: 1;
                    transform: translateY(-45px);
                }

                24% {
                    opacity: 1;
                }

                40% {
                    animation-timing-function: ease-in;
                    transform: translateY(-24px);
                }

                65% {
                    animation-timing-function: ease-in;
                    transform: translateY(-12px);
                }

                82% {
                    animation-timing-function: ease-in;
                    transform: translateY(-6px);
                }

                93% {
                    animation-timing-function: ease-in;
                    transform: translateY(-4px);
                }

                25%,
                55%,
                75%,
                87% {
                    animation-timing-function: ease-out;
                    transform: translateY(0px);
                }

                100% {
                    animation-timing-function: ease-out;
                    opacity: 1;
                    transform: translateY(0px);
                }
                }
        `}</style>
        </>
    )
}