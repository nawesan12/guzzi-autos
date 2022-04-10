import { useState, useEffect } from "react"

export default function HomeSlider() {

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        setTimeout(nextSlide, 7000)
        // eslint-disable-next-line
    }, [slide])

    const nextSlide = () => {
        slide > 1 ? setSlide(0) : setSlide(slide + 1)
    }

    const prevSlide = () => {
        slide === 0 ? setSlide(2) : setSlide(slide - 1)
    }

    return (
        <>
        <section className="home_slider">
            <section className="controllers">
                <button className="arrowBack" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="45" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="9" y2="16" />
                        <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                </button>
                <button className="arrowForward" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="45" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                </button>
            </section>

            <section className="slider">
                <article className="centered slide-one">
                    <h1>Guzzi Autos <br /> <span>Tenemos lo que tu vehiculo necesita</span></h1>
                </article>
                <article className="centered slide-two">
                    <h4>Enamorate de tu auto cada día mas.</h4>
                </article>
                <article className="centered slide-three">
                    <h4>Como si manejaras uno nuevo todos los días.</h4>
                </article>
            </section>

            <section className="dots">
                <button className={slide == 0 ? "dot active-dot" : "dot"} onClick={() => setSlide(0)}/>
                <button className={slide == 1 ? "dot active-dot" : "dot"} onClick={() => setSlide(1)}/>
                <button className={slide == 2 ? "dot active-dot" : "dot"} onClick={() => setSlide(2)}/>
            </section>
        </section>

        <style jsx>{`
            .home_slider {
                height:90vh;
                min-width:100vw;
                padding:1rem 0;
            }

            .slider {
                width:auto;
                display:flex;
                transition: all .4s ease;
                transform: translateX(${slide * -100}%);
            }

            .slide-one {
                background:url('/images/backgrounds/home.webp') no-repeat top center;
            }

            .slide-two {
                background:url('/images/backgrounds/home2.jpg') no-repeat top center;
            }

            .slide-three {
                background:url('/images/backgrounds/home3.jpg') no-repeat top center;
            }

            .centered {
                height:85vh;
                min-width:100vw;
                display:flex;
                align-items:center;
                justify-content:center;
                background-size:cover;
                font-family: 'Quicksand';
            }

            h1, h4 {
                text-align:center;
                font-size:2.25rem;
                text-shadow: 0px 0px 1.2rem var(--primary);
            }

            h1 span {
                font-size:1.4rem;
            }

            .controllers {
                position:absolute;
                left:5%;
                height:80%;
                width:90%;
                z-index:10;
                display:flex;
                justify-content:space-between;
                align-items:center;
            }

            button {
                background:none;
                border:none;
                outline:none;
                cursor:pointer;
            }

            .dots {
                position:absolute;  
                z-index:12;
                bottom:0;
                left:0;
                width:100%;
                height:10%;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .dot {
                height:1.2rem;
                width:1.2rem;
                border-radius:50%;
                background:var(--boring);
                margin:0 1rem;
                transition:all .2s ease;
            }

            .active-dot {
                background:var(--boring-bg);
            }

            @media screen and (max-width:1200px) {
                .home_slider {
                    height:80vh;
                    margin-bottom:10vh;
                }

                .centered {
                    height:80vh;
                }

                .slide-one, .slide-two, .slide-three {
                    background-size:cover;
                    background-position:left;
                }

                .controllers {
                    width:95%;
                    height:70%;
                    display:flex;
                    align-items:flex-end;
                    left:2.5%;
                }
            }
        `}</style>
        </>
    )
}