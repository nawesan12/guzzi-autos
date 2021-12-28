import Link from 'next/link'
import Image from 'next/image'

export default function Auto(props) {
    return(
        <> 
        <Link href={`/${props.id}`} target="_blank"><a>
        <article className="auto">
            <div className="auto_photo">
                <Image src="https://picsum.photos/300/300" alt={props.name + props.description} layout="fill" object-fit="cover" />
            </div>
            <h4 className="auto_name">{props.name}</h4>
            <span className="auto_description">{props.description.split('', 80)}...</span>
            <p className="auto_price">{props.price}</p>
        </article></a>
        </Link>
        <style jsx>{`
            .auto {
                width:90vw;
                height:20rem;
                background:white;
                margin: 2.5vh auto;
                border-radius:.3rem;
            }

            .auto_photo {
                height:65%;
                position:relative;
                text-align:center;
                margin:.5rem;
            }    

            .auto_name {
                text-transform:capitalize;
                padding:0 1rem;
                margin:.6rem 0;
            }

            .auto_description {
                padding:0 1rem;
            }

            .auto_price {
                float:right;
                color:#292929;
                font-size:1.1rem;
                padding:0 2rem;
            }
        `}</style>
        </>
    )
}