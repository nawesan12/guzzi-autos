import Car from './Car/Car'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/getData'

export default function CarsWrapper() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getData('autos', setCars)
    }, [])

    return (
        <>
            <section className="products-wrapper">
                {
                cars.length === 0 ? 
                    <h2>Cargando...</h2> :
                    cars.map((car, index) => (
                        <Car 
                            key={index}
                            {...car}
                        />
                    ))
                }
            </section>

            <style jsx>{`
                .products-wrapper {
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    width:60vw;
                    background: #fff;
                    border: 2px solid #eee;
                    border-radius:.4rem;
                    padding: 2.5rem 1.4rem 1.5rem;
                    margin: 2rem auto;
                }    

                @media screen and (max-width:1200px) {
                    .products-wrapper {
                        width:97.5vw;
                        margin:auto;
                        padding: 2.5rem 1rem;
                    }
                }
            `}</style>
        </>
    )
}