export default function Main() {
    return(
        <>
            <section className="home_main">
                <h1>Guzzi Autos</h1>
                <video src="/images/rickroll.mp4" className="video_rickroll" autoPlay/>
            </section>
            <style jsx>{`
                .home_main {
                    height:80vh;
                    width:100vw;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:url('')
                }

                .video_rickroll {
                    position:absolute;
                    top:10vh;
                    left:0;
                    z-index:-1;
                    opacity:.8;
                    position:center;
                    width:100vw;
                    object-fit:cover;
                }
            `}</style>
        </>
    )
}