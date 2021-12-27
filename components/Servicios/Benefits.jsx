import Image from 'next/image'

export default function Benefits() {
    return(
        <section className="benefits">
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/primera.webp" alt="Beneficio 1" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Interior impresionante</h4>
                <p className="description">Limpieza interna con aspiradora y nuestros accesorios especiales para auto</p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/segunda.webp" alt="Beneficio 2" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Listo para brillar</h4>
                <p className="description">Limpieza externa con hidrolavadora de alta presion usando nuestros productos especiales</p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/tercera.webp" alt="Beneficio 3" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Desinfeccion</h4>
                <p className="description">Sanitizacion apropiada removiendo viruses y germenes tambien es parte de nuestro servicio</p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/cuarta.webp" alt="Beneficio 4" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Brillo detallado</h4>
                <p className="description">El pulido es una parte importante de un buen resultado, tu auto lucira suave y fresco</p>
            </article>

            <style jsx>{`
                .benefits {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }

                .benefit {
                    margin:2rem 0;
                }

                .svgphoto {
                    position:relative;
                    display:block;
                    margin:auto;
                    width: 6rem;
                    height:6rem;
                }    

                .benefit .title {
                    margin:0;
                    text-align:center;
                    font-size:1.2rem;
                    font-weight:bold;
                    color:#eee;
                    text-decoration:underline solid #802020;
                }

                .description {
                    text-align:center;
                    color:#ccc;
                    font-size:1.1rem;
                    padding:0 4rem;
                    font-weight:bold;
                }

                @media screen and (min-width:1200px) {
                    .benefits {
                        width:90vw;
                        margin:auto;
                        flex-direction:row;
                        justify-content:space-evenly;
                    }

                    .benefit {
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:flex-start;
                    }

                    .description {
                        padding:1rem;
                    }
                }
            `}</style>
        </section>
    )
}