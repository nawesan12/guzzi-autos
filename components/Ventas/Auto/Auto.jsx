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
            <span className="auto_description">{props.description.split('', 80)}...</span>
            <p className="auto_manual">{props.manual === true ? "Manual" : "Automatico"}</p>
            <p className="auto_price">{props.price}</p>
        </article>
        <style jsx>{`
            .auto {
                width:90vw;
                height:25rem;
                background:white;
                margin: 2.5vh auto;
                border-radius:.3rem;
            }

            .auto_photo {
                height:60%;
                position:relative;
                text-align:center;
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
                padding:0 1rem;
                width:90%;
                margin:auto;
            }

            .auto_price {
                float:right;
                color:#292929;
                font-size:1.1rem;
                padding:0 1rem;
                display:inline-block;
            }

            .auto_manual {
                float:left;
                color:#292929;
                font-size:1.1rem;
                padding:0 1rem;
                display:inline-block;
            }
        `}</style>
        </>
    )
}