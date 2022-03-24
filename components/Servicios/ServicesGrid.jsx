import Image from "next/image"

import services from './services.json'

export default function ServicesGrid() {
    return (
        <>
        <section className="services_grid">
            {
                services.map((service) => (
                    <article className="service" key={service.id}>
                        <section className="bg-service-image">
                            {/*<Image src={service.image} alt={service.description} layout="fill" objectFit="cover" priority />*/}
                        </section>
                        <h4>{service.title}</h4>
                        <span>Leer mas</span>
                    </article>
                ))
            }
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
                justify-content:center;
                align-items:center;
                padding:.2rem;
            }

            .bg-service-image {
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
            }

            h4 {
                color: var(--primary-text);
                position:relative;
                z-index:1;
                font-size:1.5rem;
                text-align:center;
            }

            span {
                position:relative;
                z-index:1;
                padding:.5rem 1rem;
                border: 2px solid var(--primary-text);
                border-radius:1rem;
                font-weight:500;
            }

            .service:hover {
                transform: scale(1.08);
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