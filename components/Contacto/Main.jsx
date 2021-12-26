import Image from 'next/image';

export default function Main() {
    return(
        <>
            <section className="contacto_main">
                <section className="contact_ways">
                    <article className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" className="whatsapp icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                        </svg>
                        <a className="link whatsapp">Enviar Mensaje</a>
                    </article>
                    <article className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" className="llamar icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <a className="link llamar">Llamar</a>
                    </article>
                    <article className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" className="instagram icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>     
                        <a className="link instagram">Instagram</a>
                    </article>
                    <article className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" className="facebook icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        <a className="link facebook" style={{color:'white'}}>Facebook</a>
                    </article>
                </section>
                <section className="map">
                    <Image src="/images/zona.png" alt="Zona de Guzzi Autos" layout="fill" object-fit="cover"/>
                </section>
            </section>
            <style jsx>{`
                .contacto_main {
                    height:80vh;
                    width:100vw;
                    background:#292929;
                    color:#f5f5f5;
                }

                .contact_ways {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-wrap:wrap;
                }

                .contact {
                    width:10rem;
                    height:15vh;
                    margin:2rem 1rem;
                    text-align:center;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-around;
                }

                svg {
                    width:3rem;
                    height:3rem;
                    border-radius:1rem;
                }
                
                .map {
                    position:relative;
                    height:34vh;
                    width:140vw;
                }

                .link {
                    padding:.5rem 1rem;
                    font-size:1.1rem;
                    color:black;
                    border-radius:3rem;
                    width:10rem;
                    font-weight:500;
                }

                .whatsapp {
                    background:#20ff20;
                }

                .llamar {
                    background:#000000;
                    color:white;
                }

                .instagram {
                    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
                    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
                }

                .facebook {
                    background:#2222bb;
                }
            `}</style>
        </>
    )
}