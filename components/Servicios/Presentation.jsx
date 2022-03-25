export default function Presentation({ title, subtitle, background, resBackground}) {
    return (
        <>
        <section className="presentation">
            <section className="title">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </section>
        </section>
        <style jsx>{`
            .presentation {
                width:100vw;
                height:80vh;
                display:grid;
                grid-template-columns:repeat(2, 1fr);
                background-image:url('/images/backgrounds/${background}');
                background-size:cover;
            }

            .title {
                grid-column: 2 / 3;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background: rgba(0,0,0,0.8);
                text-align:center;
            }

            h1 {
                font-size:3rem;
                font-family: 'Quicksand';
                margin:0;
                text-shadow: 0 0 .5rem var(--primary);
            }

            @media screen and (max-width:1200px) {
                .presentation {
                    height:85vh;
                    background-image:url('/images/backgrounds/${resBackground}');
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    margin:0;
                }

                .title {
                    background:none;
                }
            }
        `}</style>
        </>
    )
}