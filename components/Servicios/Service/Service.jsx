import { useState } from 'react';

import Image from 'next/image'
import ServiceModal from './ServiceModal'

export default function Service(props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <article className="service" onClick={() => setShowModal(true)}>
            <section className="bg-service-image">
                <Image src={props.image} alt={"Guzzi Autos - Car detailing" + props.description} layout="fill" objectFit="cover" priority/>
            </section>
            <h4>{props.title}</h4>
            <span>Leer mas</span>
        </article>

        { showModal && <ServiceModal {...props} setShowModal={setShowModal} /> }

        <style jsx>{`
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
                text-shadow: 0 0 .5rem var(--primary);
            }

            span {
                position:relative;
                z-index:1;
                padding:.5rem 1rem;
                border: 2px solid var(--primary-text);
                border-radius:1rem;
                font-weight:500;
                text-shadow: 0 0 .5rem var(--primary);
                box-shadow:0 0 2px var(--primary);
            }

            .service:hover {
                transform: scale(1.08);
            }
        `}</style>
        </>
    )
}