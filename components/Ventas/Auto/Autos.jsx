import db from '../../../database/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import Auto from './Auto'

export default function Autos(props){

    const [autos, setAutos] = useState([])
    const [query, setQuery] = useState([])

    useEffect(() => {
        const getAutos = async () => {
            const auto = await getDocs(collection(db, 'autos'))
            const autos = []

            auto.forEach((doc) => {
                const { id, marca, modelo, age, description, price, usado, vtv_approved, plate, papeles_al_dia, motor, manual, titular, kilometraje, naftero, color, caracteristicas } = doc.data()
                autos.push({ id, marca, modelo, age, description, price, usado, vtv_approved, plate, papeles_al_dia, motor, manual, titular, kilometraje, naftero, color, caracteristicas }) 
            })
            setAutos(autos)
            console.log(autos)
        }
        getAutos()
    }, [])

    const handleQueryText = (event) => {
        setQuery(event.target.value)
        console.log(query)
    }

    return(
        <>
        <section className="autos_container" style={{background:'#292929', padding:'1rem 0'}}>
            <div className="search">
                <input type="text" onChange={(value) => handleQueryText(value)} className="search_bar" placeholder="Buscar..."/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </div>
            {
                autos.filter(auto => {
                    if(query === "") {
                        return auto;
                    } else if(auto.modelo.toLowerCase().includes(query.toString().toLowerCase()) ||
                              auto.marca.toLowerCase().includes(query.toString().toLowerCase()) ||
                              auto.age.toString().toLowerCase().includes(query.toString().toLowerCase())
                    ) {
                        return auto;
                    }
                }).map((auto, index) => (
                    <Auto 
                        key={index}
                        id={auto.id}
                        marca={auto.marca}
                        modelo={auto.modelo}
                        age={auto.age}
                        description={auto.description}
                        price={auto.price}
                        usado={auto.usado}
                        vtv_approved={auto.vtv_approved}
                        plate={auto.plate}
                        papeles_al_dia={auto.papeles_al_dia}
                        detalles_motor={auto.detalles_motor}
                        manual={auto.manual}
                        titular={auto.titular}
                    />
                ))
            }           
        </section>
        <style jsx>{`
            .search {
                position:sticky;
                height:3rem;
                width:12.5rem;
                border-radius:0 1rem 1rem 0;
                top:5vh;
                right:0;
                z-index:10;
                transition:all .3s ease;
                transform:translateX(-85%);
                display:flex;
                justify-content:center;
                align-items:center;
                background:white;
                border:2px solid black;
            }

            svg {
                position:relative;
            }

            .search_bar {
                height:3rem;
                width:10rem;
                border-radius:0 1rem 1rem 0;
                padding:1rem .5rem;
            }

            .search:focus-within {
                transform:translateX(0%)
            }
        `}</style>
        </>
    )
}