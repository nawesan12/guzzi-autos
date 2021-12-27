import Link from 'next/link'

export default function Footer(){
    return(
        <>
        <footer className="app_footer">
            <div className="fix-row">
                <p>Ricardo Guzzi - 2022</p>
                <div className="social_media">
                    <Link href="https://api.whatsapp.com/send?phone=+542235254339&text=Hola%20Ricardo!%20Queria%20hacerte%20una%20consulta." target="_blank" rel="noreferrer"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                    </svg></a></Link>
                    <Link href="https://www.instagram.com/guzziautos" target="_blank" rel="noreferrer"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg></a></Link>
                    <Link href="https://www.facebook.com/Guzzi-Autos-112314927616800/?ref=page_internal" target="_blank" rel="noreferrer"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg></a></Link>
                </div>
            </div>
            <span>Pagina hecha por Nahuel Santillan</span>
        </footer>
        <style jsx>{`
            .app_footer {
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                justify-content:space-evenly;
                background:#101010;
                color:#f5f5f5;    
                height:10vh;
                width:100vw;
            }

            .fix-row {
                width:100vw;
                display:flex;
                justify-content:space-around;
            }

            .app_footer p {
                font-size:1.1rem;
                margin:.1rem;
            }

            .social_media a {
                margin:.1rem 1rem;
            }

            span {
                font-size:.6rem;
            }
        `}</style>
        </>
    )
}
