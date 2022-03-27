import Service from "./Service/Service"

import services from './services.json'

export default function ServicesGrid() {
    return (
        <>
        <section className="services_grid">
            {
                services.map((service) => (
                    <Service 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        id={service.id}
                    />
                ))
            }
        </section>

        <style jsx>{`
            .services_grid {
                width:100vw;
                height:130vh;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-gap: 1rem;
                padding: 1.8rem;
            }    

            @media screen and (max-width:1200px) {
                .services_grid {
                    height:auto;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(7, 1fr);
                    padding:.5rem; 
                    margin:1rem 0;
                    gap: .5rem;
                }
            }
        `}</style>
        </>
    )
}