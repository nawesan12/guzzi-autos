import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <header className="app_header">
            <section className="nav_logo">
                <Image src="/favicon.ico" layout="fill" object-fit="cover" alt="Guzzi Autos - Mantenimiento, limpieza y ventas"/>
            </section>

            <nav className={isOpen ? "nav visible" : "nav hidden"}>
                <ul className="nav_list">
                    <li className="nav_link">
                        <Link href="/"><a>Inicio</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link href="/"><a>Servicios</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link href="/"><a>Contacto</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link href="/"><a>Clientes</a></Link>
                    </li>
                    <li className="nav_link ventas">
                        <Link href="/"><a>Ventas</a></Link>
                    </li>
                </ul>
            </nav>

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
                background:#292929;
            }

            .nav_logo {
                position:relative;
                height:70%;
                width:6rem;
            }

            .nav_list {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background:rgba(0,0,0,.8);
                position:absolute;
                top:8vh;
                left:0;         
                width:100vw;
                height:90vh;

            }

            .nav_link {
                list-style-type:none;
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
            @media screen and (min-width:1300) {  

            }
        `}</style>
        </>
    )
}