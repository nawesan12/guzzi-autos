import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const hideNav = () => {
        setIsOpen(false)
    }

    return(
        <>
        <header className="app_header">
            <section className="nav_logo">
                <Image src="/images/car.png" layout="fill" object-fit="cover" alt="Guzzi Autos - Mantenimiento, limpieza y ventas" onClick={() => router.push('/')}/>
            </section>

                <div className={isOpen ? "nav_list visible" : "nav_list hidden"}>
                    <li className="nav_link" onClick={() => hideNav()}>
                        <Link href="/" ><a>Inicio</a></Link>
                    </li>
                    <li className="nav_link" onClick={() => hideNav()}>
                        <Link href="/servicios"><a>Servicios</a></Link>
                    </li>
                    <li className="nav_link" onClick={() => hideNav()}>
                        <Link href="/contacto"><a>Contacto</a></Link>
                    </li>
                    <li className="nav_link" onClick={() => hideNav()}>
                        <Link href="/clientes"><a>Clientes</a></Link>
                    </li>
                    <li className="nav_link ventas" onClick={() => hideNav()}>
                        <Link href="/ventas"><a title="Tenemos el usado que buscas">Ventas</a></Link>
                    </li>
                </div>

            <span className="burger" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            </span>
            
            <div className="header_media">
                <Link href="https://www.google.com"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg></a></Link>
                <Link href="https://www.instagram.com/guzziautos"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg></a></Link>
                <Link href="https://www.facebook.com"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg></a></Link>
            </div>
        </header>
        <style jsx>{`
            .app_header {
                display:flex;
                align-items:center;
                justify-content:space-around;
                height:10vh;
                width:100vw;
                color:#f5f5f5;
                background:#252525;
                transition:.3s all ease;
            }

            .nav_logo {
                position:relative;
                height:60%;
                width:8rem;
            }

            .nav_list {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background:rgba(0,0,0,.85);
                position:absolute;
                top:8vh;
                left:0;         
                z-index:15;
                width:100vw;
                height:90vh;
                margin:1rem auto;
            }

            .nav_link {
                list-style-type:none;
                margin:2rem 0;
                font-size:1.3rem;
                font-weight:bold;
            }

            .nav_link a {
                margin:0;
            }

            .header_media {
                display:none;
            }

            .burger {
                display:block;
            }

            .hidden {
                display:none
            }

            .visible {
                display:flex;
            }

            .ventas {
                background:#802020;
                padding:1rem 2rem;
                border-radius:1rem;
            }

            @media screen and (min-width:1200px) {  
                .app_header {
                    padding:0 3rem;
                }

                .burger {
                    display:none;
                }

                .header_media {
                    display:flex;
                }

                .header_media a {
                    margin:0 1rem;
                }
               

                .nav_list {
                    display:flex;
                    position:static;
                    flex-direction:row;
                    background:none;
                    width:15vw;
                    height:100%
                }

                .ventas {
                    padding:.5rem 1rem;
                }

                .nav_link {
                    font-weight:400;
                    font-size:1rem;
                    margin:1rem;
                    border: 3px solid transparent;
                }

                .nav_link:hover {
                    border-bottom:3px solid #802020
                }



                .hidden {
                    display:flex;
                }
            }
        `}</style>
        </>
    )
}