export default function ServicesGallery() {
    return (
        <>
        <section className="services_gallery">
            <article className="services_item lavado-y-detallado-de-motor cover">
                <h2>Lavado y Detallado de Motor</h2>
                <button>Saber Mas</button>
            </article>
            <article className="services_item pulido-de-optica cover">
                <h2>Pulido de Optica</h2>
                <button>Saber Mas</button>
            </article>
            <article className="services_item abrillantados cover">
                <h2>Abrillantados</h2>
                <button>Saber Mas</button>
            </article>
            <article className="services_item lavado-completo cover">
                <h2>Lavado Completo</h2>
                <button>Saber Mas</button>
            </article>
        </section>

        <style jsx>{`
            .services_gallery {
                position:relative;
                z-index:2;
                height:100vh;
                width:100vw;
                display:grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-gap:1rem;
                padding:0 1.5rem;
            }  

            .services_item {
                background: var(--bordeaux);
                transition: all .2s ease;
                cursor:pointer;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
            }

            .services_item:hover {
                transform: scale(1.1);
            }

            .cover {
                background-size:cover;
            }

            .lavado-y-detallado-de-motor {
                background-image: url("/images/backgrounds/lavado-y-detallado-de-motor.jpg");
            }

            .pulido-de-optica {
                background-image: url("/images/backgrounds/pulido-de-optica.jpg");
            }

            .abrillantados {
                background-image: url("/images/backgrounds/abrillantados.jpg");
            }

            .lavado-completo {
                background-image: url("/images/backgrounds/lavado-completo.jpg");
            }

            h2 {
                font-size:2rem;
            }

            button {
                border:none;
                background:none;
                outline:none;
                font-size:1.1rem;
                font-weight:500;
                color:var(--secondary);
                border: 2px solid var(--secondary);
                border-radius:1rem;
                padding:.5rem 1rem;
            }
       `}</style>
        </>
        
    )
}