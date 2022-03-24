import Image from "next/image";

export default function ServicesGrid() {
    return (
        <>
        <section className="services_grid">
            <div className="service">
                <section className="bg-service-image">
                    <Image src="/images/backgrounds/abrillantados.jpg" alt="" layout="fill" objectFit="cover" />
                </section>
                <span></span>
                <h4>Abrillantados</h4>
                <span>Leer mas</span>
            </div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
            <div className="service"></div>
        </section>

        <style jsx>{`
            .services_grid {
                width:100vw;
                height:100vh;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-gap: 1rem;
                padding: 1.8rem;
            }    

            .service {
                background: var(--bordeaux);
                border-radius: .1rem;
                cursor:pointer;
                transition: all .1s ease;
                position:relative;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
            }

            .bg-service-image {
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
                filter: blur(1px);
            }

            h4 {
                color: var(--primary-text);
                position:relative;
                z-index:1;
                font-size:1.5rem;
            }

            span {
                position:relative;
                z-index:1;
            }

            .service:hover {
                transform: scale(1.1);
            }

            @media screen and (max-width:1200px) {
                .services_grid {
                    height:145vh;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(7, 1fr);
                    padding:.5rem;
                    gap: .5rem;
                }
            }
        `}</style>
        </>
    )
}