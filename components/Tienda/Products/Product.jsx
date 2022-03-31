import Image from "next/image";
import ProductDetail from "./ProductDetail";

export default function Product(props) {

    const addToCart = (item) => {
        props.itemsSelected.push(item)
    }

    return(
        <>
            <article className="product" title={props.productName}>
                <div className="product-image">
                    <Image src={props.productImage} alt={props.productDescription} layout="fill" objectFit="cover"/>
                </div>
                <section className="product-name">
                    { props.productName }
                </section>
                <footer>
                    <div className="product-price" title="Consultar">$ Precio</div>
                    <div className="product-details" title="Ver Detalles">Detalles</div>
                </footer>
            </article>

            <ProductDetail />

            <style jsx>{`
                .product {
                    height:19rem;
                    width:32%;
                    margin-bottom:1rem;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    justify-content:space-between;
                    border-radius: 0 0 .4rem .4rem;
                    cursor:pointer;
                }    

                .product-image {
                    height:55%;
                    width:100%;
                    position:relative;
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
                    cursor:pointer;

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

                .separation {
                    width:0;
                    height:0;
                    border-top:2rem solid var(--bordeaux);
                    border-right:2rem solid transparent;
                    border-left:2rem solid transparent;
                    border-bottom:2rem solid transparent;
                }

                .product-details {
                    display:grid;
                    place-items:center;
                    background:var(--boring);
                    width:50%;
                    border-radius: 0 0 .4rem;
                    font-weight:500;
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