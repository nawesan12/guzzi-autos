export default function AutoSinglePage(props) {
    return(
        <>
        <section className="auto_single_page">
            <header>
                <span onClick={props.volver}>&#8666; Volver</span>
                <span>{props.modelo} {props.marca}</span>
            </header>
            <main>
                <div className="carrousel">

                </div>
                <h2 className="car_name">{props.modelo} {props.marca} {props.age.toString()}</h2>
                <span className="price">${props.price}</span>
                <p className="description">{props.description}</p>
                <div className="car_info">
                    <ul className="caracteristicas">
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gps" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 17l-1 -4l-4 -1l9 -4z" />
                            </svg>{props.kilometraje.toString()}</li>
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                                <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
                                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                                <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
                            </svg>{props.color}</li>
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-manual-gearbox" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="5" cy="6" r="2" />
                                <circle cx="12" cy="6" r="2" />
                                <circle cx="19" cy="6" r="2" />
                                <circle cx="5" cy="18" r="2" />
                                <circle cx="12" cy="18" r="2" />
                                <line x1="5" y1="8" x2="5" y2="16" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
                            </svg>{props.manual === true ? "Manual" : "Automatico"}</li>
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-engine" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 10v6" />
                                <path d="M12 5v3" />
                                <path d="M10 5h4" />
                                <path d="M5 13h-2" />
                                <path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6z" />
                            </svg>{props.motor}</li>
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gas-station" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
                                <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
                                <line x1="3" y1="20" x2="15" y2="20" />
                                <path d="M18 7v1a1 1 0 0 0 1 1h1" />
                                <line x1="4" y1="11" x2="14" y2="11" />
                            </svg>{props.naftero === true ? "Nafta" : "Gas"}</li>
                        <li className="caracteristica">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-crash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="17" r="2" />
                                <path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" />
                                <path d="M14 8v-2" />
                                <path d="M19 12h2" />
                                <path d="M17.5 15.5l1.5 1.5" />
                                <path d="M17.5 8.5l1.5 -1.5" />
                            </svg>{props.usado === true ? "Usado" : "Nuevo"}</li>
                    </ul>
                    <ul className="detalles">
                        {
                        props.caracteristicas.map((e, index) => (
                            <li key={index} className="detalle"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#802020" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                            <polyline points="11 12 12 12 12 16 13 16" />
                          </svg>{e}</li>
                        ))
                        }
                    </ul>
                </div>
            </main>
            <footer>
                <a href={`https://api.whatsapp.com/send?phone=542235254339&text=Hola%20Ricardo!%20Me%20interesa%20el%20auto%20${props.modelo}%20${props.marca}%20${props.age.toString()}`} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                    <path d="M12 6v2m0 8v2" />
                </svg>COMPRAR<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg></a>
            </footer>
        </section>
        <style jsx>{`
            .auto_single_page {
                display:${props.display};
                position:fixed;
                overflow-y:scroll;
                z-index:15;
                left:0;
                top:10vh;
                height:80vh;
                width:100vw;
                background:white;
            }    

            header {
                display:flex;
                justify-content:space-between;
                padding:1rem;
                font-weight:bold;
                font-size:1.1rem;
                text-transform:capitalize;
            }

            header span {
                display:flex;
                align-items:center;
            }

            .carrousel {
                display:block;
                height:30vh;
                width:90vw;
                position:relative;
                margin:auto;
                background:#292929;
            }

            .car_name {
                padding:0 1rem;
                text-transform:capitalize;
            }

            .price {
                padding:0 1rem;
                font-weight:bold;
                font-size:1.3rem;
            }

            .description {
                padding:0 1rem;
            }

            .description:first-letter {
                text-transform:capitalize;
            }

            ul {
                margin-left:-1rem;
            }

            li {
                text-transform:capitalize;
                list-style-type:none;
                display:flex;
                align-items:center;
                margin:.6rem 0;
                border-bottom:1px solid #eee;
                padding:.5rem;
            }

            svg {
                margin-right:.5rem;
            }

            footer {
                height:15vh;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            footer a {
                padding:1rem 2rem;
                color:#f5f5f5;
                background:#802020;
                display:flex;
                align-items:center;
                font-weight:bold;
                font-size:1.2rem;
            }

            footer svg {
                margin:0 .5rem;
            }

            @media screen and (min-width:1200px) {
                .carrousel {
                    width:60vw;
                    margin:auto;
                }

                .car_name {
                    width:60vw;
                    margin:1rem auto;
                    text-transform:capitalize;
                }

                .price {
                    padding:0 1rem;
                    font-weight:bold;
                    font-size:1.5rem;
                    display:block;
                    width:60vw;
                    margin:auto;
                }

                .description {
                    padding:0 1rem;
                    width:60vw;
                    margin:1rem auto;
                }

                ul {
                    width:60vw;
                    margin:auto;
                }

                li {
                    margin:1rem auto;
                    padding:2.5rem auto;
                }
            }
        `}</style>
        </>    
    )
}