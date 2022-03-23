export default function QuoteSection() {
    return (
        <>
        <section className="home_quotes">
            <div className="diagonal-separation" />

            <div className="content">
                <h4>Tenemos lo que tu vehiculo necesita.</h4>
            </div>
        </section>

        <style jsx>{`
            .home_quotes {
                background: url('/images/backgrounds/lavado-completo.jpg') center no-repeat;
                position:relative;
                height:120vh;
                width:100vw;
                background-size:cover;
            }    

            .content {
                display:flex;
                justify-content:center;
            }

            .home_quotes h4 {
                font-size:2.8rem;
                margin:0;
                padding:0;
                position:relative;
                top:-40vh;
                padding:1rem;
            }

            .diagonal-separation {
                height:60vh;
                width:120vw;
                position:relative;
                top:-30vh;
                left:-20vh;
                z-index:0;
                background:var(--primary);
                transform:rotate(-15deg);
                box-shadow: 0 0 40px 50px var(--secondary-text);
            }
        `}</style>
        </>
    )
}