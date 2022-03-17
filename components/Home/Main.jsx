import { useRouter } from 'next/router'; 

export default function Main() {

    const router = useRouter();

    return(
        <section className="home_main">
            <section className="background">
                <video src="/images/rickroll.mp4" className="video_rickroll" loop autoPlay muted/>
            </section>
            <section className="presentation">
                <p className="welcome">Bienvenidos a</p>
                <h1 className="titulo">Guzzi Autos</h1>
                <p className="phrase">Tenemos todo lo que tu vehiculo necesita!</p>
                <button className="about_us" onClick={() => router.push('/servicios')}>Sobre nosotros</button>
            </section>
            <style jsx>{`
                
            `}</style>
        </section>
    )
}