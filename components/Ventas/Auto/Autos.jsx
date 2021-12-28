import db from '../../../database/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Auto from './Auto'
import { useState, useEffect } from 'react'

export default function Autos(){

    const [autos, setAutos] = useState([])

    useEffect(() => {
        const getAutos = async () => {
            const auto = await getDocs(collection(db, 'autos'))
            const autos = []

            auto.forEach((doc) => {
                const { id, marca, modelo, age, description, price, usado, vtv_approved, plate, papeles_al_dia, detalles_motor, manual, titular } = doc.data()
                autos.push({ id, marca, modelo, age, description, price, usado, vtv_approved, plate, papeles_al_dia, detalles_motor, manual, titular }) 
            })
            setAutos(autos)
            console.log(autos)
        }
        getAutos()
    }, [])

    return(
        <section className="autos_container">
            {
                autos.map((auto, index) => (
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
    )
}