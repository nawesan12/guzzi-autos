import { useState } from "react";
import Image from "next/image";
import ProductDetail from "./ProductDetail";

export default function Product(props) {

    const [detailsOpen, setDetailsOpen] = useState(false);

    const addToCart = () => {
        props.itemsSelected.push({name: props.name, price: props.price, image: props.image});
        console.log(props.itemsSelected)
    }

    return(
        <>
            <article className="product" title={props.name} onClick={() => setDetailsOpen(true)}>
                <div className="product-image">
                    <Image src={props.image} alt={props.description} layout="fill" objectFit="cover"/>
                </div>
                <section className="product-name">
                    {props.name}
                </section>
                <footer>
                    <div className="product-price" title="Consultar">${props.price}</div>
                    <button className="product-details" title="Ver Detalles">Detalles</button>
                </footer>
            </article>

            { detailsOpen && <ProductDetail  {...props} addToCart={addToCart} setDetailsOpen={setDetailsOpen} /> }

            <style jsx>{`
                .product {
                    height:19rem;
                    width:32%;
                    margin-bottom:1rem;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    justify-content:space-between;
                    border-radius: .2rem .2rem .4rem .4rem;
                    cursor:pointer;
                }    

                .product:hover {
                    transform: scale(1.01);
                }

                .product-image {
                    height:55%;
                    width:100%;
                    position:relative;
                    border-radius: .2rem .2rem 0 0;
                    overflow:hidden;
                    background:var(--boring);
                }

                .product-name {
                    width:100%;
                    height:30%;
                    border-right:1px solid #999;
                    border-left:1px solid #999;
                    display:grid;
                    place-items:center;
                    font-weight:500;
                }

                footer {
                    height:15%;
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    border-radius: 0 0 .4rem .4rem;
                }

                .product-price {
                    background:var(--bordeaux);
                    width:50%;
                    display:grid;
                    place-items:center;
                    font-weight:bold;
                    color:var(--primary-text);
                    border-radius: 0 0 0 .4rem;
                }

                .product-details {
                    display:grid;
                    place-items:center;
                    background:var(--boring);
                    width:50%;
                    border-radius: 0 0 .4rem;
                    outline:none;
                    border:none;
                    font-weight:bold;
                    cursor:pointer;
                }

                @media screen and (max-width:1200px) {
                    .product {
                        width:48%;
                        height: 14rem;
                    }
                }
            `}</style>
        </>
    )
}