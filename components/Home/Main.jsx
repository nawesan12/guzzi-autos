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
                <p className="phrase">Mantenimiento, limpieza y ventas!</p>
                <button className="about_us" onClick={() => router.push('/servicios')}>Sobre nosotros</button>
            </section>
            <section className="presentation_photo">
                una foto de algo
            </section>
            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Fruktur&family=Poppins:wght@200&display=swap');

                .home_main {
                    height:80vh;
                    width:100vw;
                    display:flex;
                    align-items:center;
                    text-align:center;
                    justify-content:space-evenly;
                    flex-direction:column;
                }

                .background {
                    max-width:100vw;
                    position:absolute;
                    top:10vh;
                    left:0;
                    z-index:-1;
                    height:85vh;
                    overflow: hidden;
                }

                .video_rickroll {
                    opacity:.8;
                    position:center;
                    height:100%;
                    object-fit: cover;
                    filter: brightness(0.4);
                }

                .titulo {
                    font-family: 'Black Ops One', cursive;
                    font-size:5rem;
                    margin:2rem auto;
                }

                .welcome {
                    font-weight:bold;
                    font-size:1.3rem;
                }

                .phrase {
                    font-size:1.1rem;
                    font-weight:bold;
                }

                .about_us {
                    padding:1rem 2rem;
                    font-size:1.1rem;
                    background:#802020;
                    outline:none;
                    border:none;
                    margin:2rem auto 0;
                    font-weight:bold;
                    transition:all .3s;
                }

                .about_us:hover {
                    background:#701010;
                    color:#ccc;
                }

                .presentation_photo {
                    display:none;
                }
            `}</style>
        </section>
    )
}