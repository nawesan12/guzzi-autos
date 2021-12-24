export default function Footer(){
    return(
        <>
        <footer className="app_footer">
            <p>Guzzi Autos - 2022</p>
            <div className="social_media">
                <Link href="phone:+542235929292"><a>Whatsapp</a></Link>
                <Link href="https://www.instagram.com/guzziautos"><a>Instagram</a></Link>
                <Link href="https://www.facebook.com"><a>Facebook</a></Link>
            </div>
        </footer>
        <style jsx>{`
            .app_footer {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background:#101010;
                color:#f5f5f5;    
            }

            .app_footer p {
                font-size:1.2rem;
            }
        `}</style>
        </>
    )
}