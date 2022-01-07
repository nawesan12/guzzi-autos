import Image from 'next/image'
import { useState } from 'react'

export default function Servicio(props) {

    const [active, setActive] = useState(false)

    return(
        <>
            <section className="service">
                <button onClick={() => setActive(!active)}><svg xmlns="http://www.w3.org/2000/svg" className={!active ? "icon icon-tabler icon-tabler-chevron-down" : "svgactive icon icon-tabler icon-tabler-chevron-down"}  width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="6 9 12 15 18 9" />
                    </svg> {props.title} </button>
                <article className={!active ? "service_panel hidden" : "service_panel active"}>
                    <p>{props.description}</p>
                    <div className="image-container">
                        <div className="image">
                            <Image src={props.image1} alt={props.title} layout="fill" object-fill="cover"/>
                        </div>
                        <div className="image">
                            <Image src={props.image2} alt={props.title} layout="fill" object-fit="cover"/>
                        </div>
                    </div>
                </article>
            </section>

            <style jsx>{`
                .service {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0 auto;
                    color:#f5f5f5;
                }

                .service button {
                    background: #292929;
                    color: #f5f5f5;
                    border: none;
                    padding: .8rem;
                    outline:none;
                    text-align:left;
                    display:flex;
                    align-items:center;
                    font-size:1.1rem;
                }

                .service svg {
                    margin-right: .5rem;
                }

                .service h4 {
                    margin: 1rem 0 0.5rem 2rem;
                }

                .service_panel {
                    display:none;
                }

                .service_panel p {
                    padding:0 2rem;
                }

                .image-container {
                    display: flex;
                    justify-content: space-around;
                }

                .hidden {
                    display:none;
                }

                .active {
                    display:block;
                }

                .image {
                    position:relative;
                    height:12rem;
                    width:10rem;
                }

                svg {
                    transition: all .3s ease-in-out;
                }

                .svgactive {
                    transform: rotate(180deg);
                }

                @media screen and (min-width:1200px) {
                    .service {
                        width:50vw;
                        margin:auto;
                    }
                }
            `}</style>
        </>
    )
}

 