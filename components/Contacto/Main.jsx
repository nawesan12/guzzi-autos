import Image from 'next/image';

export default function Main() {
    return(
        <>
            <section className="contact_bg"/>
            <section className="contacto_main">
                <section className="contact_ways">
                    <a className="contact" href="https://api.whatsapp.com/send?phone=+542235254339&text=Hola%20Ricardo!%20Queria%20hacerte%20una%20consulta." target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="whatsapp icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                        </svg>
                        <span className="link whatsapp">Enviar Mensaje</span>
                    </a>
                    <a className="contact" href="callto:+542235254339" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="llamar icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <span className="link llamar">Llamar</span>
                    </a>
                    <a className="contact" href="https://www.instagram.com/guzziautos" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="instagram icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>     
                        <span className="link instagram">Instagram</span>
                    </a>
                    <a className="contact" href="https://www.facebook.com/Guzzi-Autos-112314927616800/?ref=page_internal" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="facebook icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        <span className="link facebook" style={{color:'white'}}>Facebook</span>
                    </a>
                </section>
            </section>
            <style jsx>{`
                .contacto_main {
                    width:100vw;
                    color:#f5f5f5;
                }

                .contact_bg {
                    height:80vh;
                    width:100vw;
                    color:#f5f5f5;
                    background:url('https://data.whicdn.com/images/101706752/original.gif') no-repeat center center;
                    /*background:url('https://c.tenor.com/YuWg88xZWTgAAAAC/audi-r8.gif') no-repeat center center;*/
                    background-size:cover;
                    filter: brightness(0.4);
                    position:relative;
                    z-index:0;
                }

                .contact_ways {
                    position:absolute;
                    z-index:1;
                    top:10vh;
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

                @media screen and (min-width:1200px) {
                    .contact_bg {
                        background-position:bottom;
                    }

                    .contact_ways {
                        left:50%;
                        bottom:50%;
                        transform: translate(-50%, 50%);
                        width:100vw;
                    }
                }
            `}</style>
        </>
    )
}