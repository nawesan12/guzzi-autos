import { useState } from "react";
import CartForm from "./CartForm";
import OrderController from "./OrderController";

export default function CartModal({ itemsSelected }) {

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
            <section className="cart_modal">
                <header>
                    <h2>Carrito</h2>
                </header>

                <CartForm order={order} setOrde={setOrder}>
                    <OrderController order={order} setOrder={setOrder} />    
                </CartForm>

                <footer>
                    <span>Gracias por tu compra!</span>
                </footer>
            </section>

            <style jsx>{`

            `}</style>
        </>
    )
}