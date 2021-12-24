import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <header className="app_header">
            <section className="nav_logo">
                <Image src="/favicon.ico" layout="fill" object-fit="cover" alt="Guzzi Autos - Mantenimiento, limpieza y ventas">
            </section>

            <nav>
                <ul className="nav_list">
                    <li className="nav_link">
                        <Link><a href="">Inicio</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link><a href="">Servicios</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link><a href="">Contacto</a></Link>
                    </li>
                    <li className="nav_link">
                        <Link><a href="">Clientes</a></Link>
                    </li>
                    <li className="nav_link ventas">
                        <Link><a href="">Ventas</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
        <style jsx>{`
            .app_header {
                display:flex;
                align-items:center;
                justify-content:space-evenly;
                height:10vh;
                width:100vw;
            }

            .nav_logo {
                position:relative;
                height:80%;
            }
        `}</style>
        </>
    )
}