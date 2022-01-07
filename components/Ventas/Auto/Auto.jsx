import Image from 'next/image'
import { useState } from 'react'

import AutoSinglePage from './AutoSinglePage'

export default function Auto(props) {
    
    const [openCar, setOpenCar] = useState(false)

    const cerrarCar = () => {
        setOpenCar(false)
    }

    return(
        <> 
        <article className="auto" onClick={() => setOpenCar(true)}>
            <div className="auto_photo">
                <Image src="https://picsum.photos/300/300" alt={props.name + props.description + 'Guzzi Autos'} layout="fill" object-fit="cover" />
            </div>
            <h4 className="auto_name">{props.modelo + ' ' + props.marca}<span>{props.age.toString()}</span></h4>
            <p className="auto_description">{props.description.split('', 120)}...</p>
            <div className="bottom">
                <p className="auto_manual">{props.manual === true ? "Manual" : "Automatico"}</p>
                <p className="auto_price">${props.price}</p>
            </div>
        </article>
        <AutoSinglePage
            key={props.id}
            id={props.id}
            marca={props.marca}
            modelo={props.modelo}
            age={props.age}
            description={props.description}
            price={props.price}
            usado={props.usado}
            vtv_approved={props.vtv_approved}
            plate={props.plate}
            papeles_al_dia={props.papeles_al_dia}
            caracteristicas={props.caracteristicas}
            manual={props.manual}
            motor={props.motor}
            naftero={props.naftero}
            titular={props.titular}
            kilometraje={props.kilometraje}
            color={props.color}
            display={openCar === true ? "block" : "none"}
            volver={() => cerrarCar()}
        />
        <style jsx>{`
            .auto {
                width:90vw;
                height:25rem;
                background:#eee;
                margin: 2.5vh auto;
                border-radius:.5rem;
            }

            .auto_photo {
                height:60%;
                position:relative;
                margin:.5rem;
            }    

            .auto_name {
                text-transform:capitalize;
                padding:0 1rem;
                margin:.6rem 0;
            }

            .auto_name span {
                float:right;
            }

            .auto_description {
                padding:0 .5rem 0 1rem;
                margin:0;
                width:90%;
                text-align:left;
                color:#555;
            }

            .bottom {
                display:flex;
                justify-content:space-around;
                align-items:center;
            }

            .auto_price {
                color:#292929;
                font-size:1.1rem;
                padding:0 1rem;
                font-weight:bold;
                /*background:lightgreen;*/
            }

            .auto_manual {
                color:#292929;
                font-size:1.1rem;
                /*background:#802020;
                color:#eee;*/
                font-weight:bold;
            }

            @media screen and (min-width:1200px) {
                .auto {
                    width:20vw;
                    height:27rem;
                    flex-wrap:wrap;
                }
            }
        `}</style>
        </>
    )
}