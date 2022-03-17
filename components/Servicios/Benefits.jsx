import Image from 'next/image'

export default function Benefits() {
    return(
        <section className="benefits">
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/primera.webp" alt="Beneficio 1" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Limpieza Interior</h4>
                <p className="description">
                    Beneficios:
                    <section>
                        <li>-Evitar alergias a causa de polvo y otros agentes</li>    
                        <li>-Evitar malos olores</li>
                        <li>-Mejorar valor en el mercado</li>
                        <li>-Mantener </li>
                    </section>    
                </p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/segunda.webp" alt="Beneficio 2" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Lavado de carroceria</h4>
                <p className="description">
                    Beneficios:
                    <section>
                        <li>-Eliminar agentes externos que puedan dañar la pintura.</li>
                        <li>-Mantener plasticos hidratados para alargar su vida util</li>
                        <li>-Evitar acumulacion de oxido y corrosion</li>
                        <li></li>
                    </section>
                </p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/tercera.webp" alt="Beneficio 3" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Limpieza de motor</h4>
                <p className="description">Beneficios: -Mejor respiracion del motor -Detectar perdidas de fluidos -Limpieza de fluidos de perdidas solucionadas -Hidratacion de plasticas y mangueras maltratadas por suciedad y temperatura</p>
            </article>
            <article className="benefit">
                <div className="svgphoto">
                    <Image src="/images/benefits/cuarta.webp" alt="Beneficio 4" layout="fill" object-fit="cover" />
                </div>
                <h4 className="title">Tratamientos</h4>
                <p className="description">Beneficios: 
                    <section>
                        <li>-Aumentar su valor en el mercado</li>
                        <li>-Brillo intenso</li>
                        <li>-Rejuvenecimiento del vehiculo</li>
                        <li>-Que permanezca mas tiempo limpio</li>
                        <li>-Que no se deteriore la pintura con facilidad</li>
                        <li>-Y protegerlo de agentes externos</li>
                    </section>
                </p>
            </article>

            <style jsx>{`
                
            `}</style>
        </section>
    )
}