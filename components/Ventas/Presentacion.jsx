export default function Presentacion() {
    return(
        <>
        <section className="presentacion">
            <div>
                <h1 className="title">Ventas</h1>
                <p>Autos de todo tipo</p>
                <h3 className="lema">Tenemos el usado que buscas</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 7 12 12 17 7" />
                <polyline points="7 13 12 18 17 13" />
            </svg>
        </section>
        <div></div>
        <style jsx>{`
            .presentacion {
                height:100vh;
                width:100%;
                color:#f5f5f5;
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                flex-direction:column;
                background:url('/images/backgrounds/ventas.gif') no-repeat left;
                background-size:cover;
                text-align:center;
                padding:1rem;
            }    

            .presentacion h1 {
                font-family: 'Black Ops One', cursive;
                font-size:2.8rem;
                margin-top:5rem;
                margin-bottom:0;
            }

            .presentacion p {
                font-size:1.1rem;
                margin-top:.5rem;
            }

            .presentacion h3 {
                font-size:1.3rem;
                text-decoration:underline;
                margin-top:2rem;
            }

            .presentacion svg {
                margin:0 auto;
                animation: bouncing 3s ease 0s infinite normal forwards;
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