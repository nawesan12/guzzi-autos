import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <>
        <footer className="app_footer">
            <section className="column">
                <h4>Guzzi Autos</h4>
                <section className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam commodi in maiores. Expedita itaque blanditiis maxime deserunt odit, dolore amet.</p>
                </section>
            </section>
            <section className="column">
                <h4>Navegacion</h4>
                <section className="content">
                    <section className="list">
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <rect x="10" y="12" width="4" height="4" />
                            </svg>    Inicio
                        </li>
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                <polyline points="12 8 7 3 3 7 8 12" />
                                <line x1="7" y1="8" x2="5.5" y2="9.5" />
                                <polyline points="16 12 21 17 17 21 12 16" />
                                <line x1="16" y1="17" x2="14.5" y2="18.5" />
                            </svg>Servicios</li>
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mailbox" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                                <path d="M12 11v-8h4l2 2l-2 2h-4" />
                                <path d="M6 15h1" />
                            </svg>Contacto</li>
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>Clientes</li>
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="7" cy="17" r="2" />
                                <circle cx="17" cy="17" r="2" />
                                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                            </svg>Ventas</li>
                        <li className="item store">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>Tienda</li>
                    </section>
                </section>
            </section>
            <section className="column">
                <h4>Medios de Pago</h4>
                <section className="content">
                    <section className="payways-grid">
                        <article className="payway visa">
                            <Image src="/images/payway/visa.png" alt="Visa" layout="fill" objectFit="cover"/>
                        </article>
                        <article className="payway cash">
                            <Image src="/images/payway/cash.png" alt="Efectivo" layout="fill" objectFit="cover"/>
                        </article>
                        <article className="payway mercadopago">
                            <Image src="/images/payway/mercadopago.jpg" alt="Mercado Pago" layout="fill" objectFit="cover"/>
                        </article>
                        <article className="payway cuenta-dni">
                            <Image src="/images/payway/cuentadni.jpg" alt="Cuenta DNI" layout="fill" objectFit="cover"/>
                        </article>
                        <article className="payway"></article>
                        <article className="payway"></article>
                    </section>
                </section>
            </section>
            <section className="column">
                <h4>Contacto</h4>
                <section className="content">
                    <section className="contacts">
                        <li className="contact_item">
                            223 5 929292
                        </li>
                        <li className="contact_item">
                            @guzziautos
                        </li>
                        <li className="contact_item">
                            guzziautos@gmail.com
                        </li>
                        <li className="contact_item">
                            Direccion, Mar del Plata
                        </li>
                    </section>
                </section>
            </section>
            <div className="copyright">Guzzi Autos - Todos los derechos reservados - 2022</div>
            <div className="logo">
                <div className="logo-container">
                    <Image src="/images/car.png" alt="Guzzi Autos" layout="fill" objectFit="cover"/>
                </div>
                <h2>Guzzi Autos</h2>
            </div>
            <span className="attribution">Web made by Nahuel Santillan - nsantillan.tech/</span>
        </footer>

        <style jsx>{`
            .app_footer {
                background: var(--boring-bg);
                width:100vw;
                height:auto;
                border-top:5px solid var(--bordeaux);
                display:grid;
                grid-template-columns:repeat(4, 1fr);
                grid-template-rows:3.5fr 15vh 8vh;
                padding:5vh 12vh 0;
            }    

            .column {
                display:grid;
                grid-template-columns:1fr;
                grid-template-rows:1.5fr 5fr;
            }

            h4 {
                text-align:center;
                font-size:1.8rem;
            }

            .content {
                text-align:left;
                padding:0 .8rem;
                font-weight:500;
                font-size:1.2rem;
            }

            .item {
                font-size:1.3rem;
                padding:.4rem 1rem;
                display:flex;
                align-items:center;
            }

            .payways-grid {
                display:grid;
                grid-template-columns:repeat(3, 1fr);
                grid-template-rows:repeat(2, 3.5rem);
                grid-gap:.5rem;
            }

            .payway {
                background:var(--bordeaux);
                position:relative;
                border-radius:.2rem;
                overflow:hidden;
            }

            .contact_item {
                font-size:1.2rem;
                padding:.4rem 1.5rem;
                display:flex;
                align-items:center;
            }

            svg {
                margin-right: 1rem;
            }

            .logo {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:flex-end;
                grid-column:4 / 5;
                grid-row: 2 / 3;
                font-size:1.5rem;
            }

            h2 {
                margin:0;
                padding:0;
            }

            .logo-container {
                width:18rem;
                min-height:4rem;
                position:relative;
            }
            .copyright {
                display:flex;
                align-items:center;
                grid-row: 2 / 3;
                grid-column: 1 / 3;
            }

            .attribution {
                grid-column:1 / 5;
                text-align:center;
            }

            .cash {
                border:4px inset var(--primary);
            }

            @media screen and (max-width: 1200px) {
                .app_footer {
                    display:flex;
                    flex-direction:column;
                    padding:2rem;
                }

                .content {
                }

                .column {

                }

                .copyright {
                    font-size:.9rem;
                    margin-bottom:2rem;
                }

                .logo {
                    text-transform:uppercase;
                }
            }
        `}</style>
        </>
    )
}