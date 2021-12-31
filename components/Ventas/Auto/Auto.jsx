import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Auto(props) {

    const router = useRouter()

    return(
        <> 
        <article className="auto" onClick={() => router.push('/ventas/:id')}>
            <div className="auto_photo">
                <Image src="https://picsum.photos/300/300" alt={props.name + props.description} layout="fill" object-fit="cover" />
            </div>
            <h4 className="auto_name">{props.modelo + ' ' + props.marca}<span>{props.age}</span></h4>
            <p className="auto_description">{props.description.split('', 120)}...</p>
            <div className="bottom">
                <p className="auto_manual">{props.manual === true ? "Manual" : "Automatico"}</p>
                <p className="auto_price">${props.price}</p>
            </div>
        </article>
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
        `}</style>
        </>
    )
}