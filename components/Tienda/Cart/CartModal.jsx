import Image from "next/image";
import { useState } from "react";
import CartForm from "./CartForm";
import OrderController from "./OrderController";

export default function CartModal({ itemsSelected, setCartOpen }) {

    const [order, setOrder] = useState({
        orderId: null,
        items: itemsSelected,
        orderDate: new Date().toLocaleDateString('es'),
        clientName: '',
        clientEmail: '',
        clientPhone: ''
    })

    return (
        <>
        <section className="cart_overlay">
            <section className="cart_modal">
                <header>
                    <span className="close_modal" onClick={() => setCartOpen(false)}>X</span>
                    <h2>Carrito</h2>
                </header>

                <CartForm order={order} setOrder={setOrder}>
                    <section className="products_list">
                        <ol>
                            {itemsSelected.length == 0 ? <p>No añadiste nada al carrito!</p> :
                                itemsSelected.map((item, index) => (
                                <li className="product" key={index}>
                                    <div className="item_information">
                                        <Image src={item.image} width={75} height={75} alt={item.description} />
                                        <p>{item.name}</p>
                                    </div>
                                    <span className="price">${item.price}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <OrderController order={order} setOrder={setOrder} setCartOpen={setCartOpen}/>    
                </CartForm>

                <footer>
                    <span>Gracias por tu compra!</span>
                </footer>
            </section>
        </section>

        <style jsx>{`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    top:4rem;
                }
                to {
                    opacity: 1;
                    top:0;
                }
            }

            ol, li {
                margin:0;
                padding:0;
                text-align:left;
            }

            li {
                margin-bottom: 2rem;
            }

            li p {
                margin: auto .5rem;
                font-weight:500;
            }

            li span {
                font-weight:bold;
            }

            .close_modal {
                float:right;
                font-size:1rem;
                font-weight:bold;
                cursor:pointer;
            }

            .cart_overlay {
                position:fixed;
                top:0;
                left:0;
                height:100vh;
                width:100vw;
                background:rgba(0,0,0,.5);
                display:grid;
                place-items:center;
                z-index:100;
            }

            .cart_modal {
                display:flex;
                flex-direction:column;
                text-align:center;
                justify-content:space-between;
                background: var(--primary-text);
                padding:2rem;
                height:30rem;
                width:30rem;
                border-radius: .4rem;
                overflow: auto;
            }

            li {
                display:flex;
                justify-content:space-between;
                align-items:center;
            }

            .item_information {
                display:flex;

            }
        `}</style>
        </>
    )
}