import { useState, useEffect } from "react"

export default function HomeSlider() {

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        setTimeout(nextSlide, 5000)
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
                <div className="arrowBack"></div>
                <div className="arrowForward"></div>
            </section>
            <section className="slider">
                <article className="slidupulis slide-one cover">
                    <h4>Frase 1</h4>
                </article>
                <article className="slidupulis slide-two cover">
                    <h4>Tenemos lo que tu vehiculo necesita.</h4>
                </article>
                <article className="slidupulis slide-three cover">
                    <h4>Enamorate de tu auto cada dia mas.</h4>
                </article>
            </section>
        </section>

        <style jsx>{`
            .home_slider {
                height:100vh;
                min-width:100vw;
                padding:1rem 0;
            }

            .slider {
                min-height:100vh;
                width:auto;
                display:flex;
                transition: all .3s ease;
                transform: translateX(${slide * -100}%);
            }

            .slide-one {
                height:100vh;
                min-width:100vw;
                background:url('/images/backgrounds/home.webp') no-repeat top center;
                background-size:cover;
            }

            .slide-two {
                height:80vh;
                min-width:100vw;
                background:url('/images/backgrounds/home.webp') no-repeat top center;
                background-size:cover;
            }

            .slide-three {
                height:80vh;
                min-width:100vw;
                background:url('/images/backgrounds/home.webp') no-repeat top center;
                background-size:cover;
            }

            .slidupulis {
                display:flex;
                align-items:center;
                justify-content:center;
            }
        `}</style>
        </>
    )
}