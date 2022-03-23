import { useState } from "react"

import Link from "next/link"
import Image from "next/image"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const hideNav = () => {
        setIsOpen(false)
    }

    return (
        <>
        <header className="app_header">
            <section className="logo">
                <Image src="/images/tarjeta.png" alt="Logo" layout='fill' objectFit="cover" />
            </section>
            <nav className="navigation">
                <section className="list">
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/"><a>Inicio</a></Link>
                    </li>
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/servicios"><a>Servicios</a></Link>
                    </li>
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/contacto"><a>Contacto</a></Link>
                    </li>
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/clientes"><a>Clientes</a></Link>
                    </li>
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/ventas"><a>Ventas</a></Link>
                    </li>
                    <li className="nav_item" onClick={hideNav}>
                        <Link href="/tienda"><a>Tienda</a></Link>
                    </li>
                </section>   
            </nav>
            <section className="burger">
                <svg xmlns="http://www.w3.org/2000/svg" className="" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </section>
        </header>

        <style jsx>{`
            .app_header {
                height:26vh;
                width:100vw;
                position:relative;
                z-index:50;
                display:flex;
                flex-direction:column;
                align-items:center;
            }    

            .logo {
                position:relative;
                height:55rem;
                width:23rem;
                top:.5rem;
            }

            .list {
                display:flex;
            }

            .nav_item {
                margin:0 .8rem;
                font-size:1.15rem;
                font-weight:500;
                transition: all .2s ease;
                border: 3px solid transparent;
            }

            .nav_item:hover {
                border-bottom:2px solid var(--bordeaux);
            }

            .burger {
                position: absolute;
                top:1.2rem;
                left:1.2rem;
                display:none;
            }

            @media screen and (max-width:1200px) {
                .app_header {
                    height:20vh;
                }
                
                .burger {
                    display:block;
                }

                .active-menu {
                    transform:translateX(0%);
                }
            }
        `}</style>        
        </>
    )
}