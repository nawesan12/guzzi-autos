import Image from "next/image"

export default function ServiceModal(props) {

    const closeModal = () => {
        props.setShowModal(false)
    }

    return (
        <>
        <section className="service_modal-overlay">
            <article className="service_modal">
                <section className="content">
                    <button className="close-modal" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="image-container">
                        <Image src={props.image} alt={props.description} layout="fill" objectFit="cover"/>
                    </div>
                </section>
            </article>
        </section>

        <style jsx>{`
            @keyframes appear {
                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }
            }

            .service_modal-overlay {
                position:fixed;
                top:0;
                left:0;
                width:100vw;
                height:100vh;
                background:rgba(0,0,0,.5);
                z-index:250;
                display:grid;
                place-items:center;
                animation: appear .2s ease-in-out;
            }

            .service_modal {
                height:auto;
                width:30vw;
                background:var(--boring-bg);
                border-radius:.6rem;
                padding:1.2rem;
                display:grid;
                place-items:center;
                border:2px solid var(--bordeaux);
                overflow-y:auto;
                overflow-x:hidden;
            }

            .service_modal::-webkit-scrollbar-thumb {
                border-radius:0 .25rem 0 0;
            }

            h2 {
                margin: 0 auto;
            }

            .image-container {
                height:10rem;
                width:28vw;
                position:relative;
                overflow:hidden;
                border-radius:.5rem;
            }

            .close-modal {
                background:none;
                border:none;
                outline:none;
                cursor:pointer;
                transform: rotate(45deg);
                float:right;
            }

            .service_modal p {
                padding: 0 1rem;
                overflow:auto;
                opacity: .7;
                line-height: 1.5;
            }

            @media screen and (max-width: 1200px) {
                .service_modal {
                    width:80vw;
                    max-height:70vh;
                }

                .image-container {
                    width:70vw;
                }

                p {
                    overflow:scroll;
                    padding: 0;
                }
            }
        `}</style>
        </>
    )
}