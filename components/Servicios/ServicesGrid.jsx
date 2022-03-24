export default function ServicesGrid() {
    return (
        <>
        <section className="services_grid">
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
            }

            .service:hover {
                transform: scale(1.1);
            }
        `}</style>
        </>
    )
}