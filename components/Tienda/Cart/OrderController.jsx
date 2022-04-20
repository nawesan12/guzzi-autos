import { useState } from 'react'
import { uploadData } from '../../../utils/uploadData'

export default function OrderController({ order, setOrder, setCartOpen }) {

    const [confirmationModal, openConfirmationModal] = useState(false)

    const generateOrderId = () => {
        setOrder({...order, orderId: crypto.getRandomValues(new Uint16Array(6))[0]})
    }

    const confirmOrder = () => {
        if (order.items.length === 0 || order.clientName === '' || order.clientEmail === '' || order.clientPhone === '') {
            alert('Te falto algo por rellenar!')
        } else {
            generateOrderId()
            openConfirmationModal(true)
        }
    }

    const uploadOrder = async () => {
        await uploadData(order, 'pedidos', () => {
            alert('Pedido enviado!')
            openConfirmationModal(false)
            setCartOpen(false)
            setOrder({})
        })
    }

    return (
        <>
            <button onClick={confirmOrder}>Enviar Pedido</button>

            {confirmationModal && (
                <section className="overlay">
                    <section className="confirmation_modal">
                        <h3>Estas seguro?</h3>
                        <button onClick={uploadOrder}>Si, seguro</button>
                        <button onClick={() => openConfirmationModal(false)}>No, volver</button>
                    </section>
                </section>
                
            )}

            <style jsx>{`
                button {
                    max-width:max-content;
                    padding:.5rem 1rem;
                    border-radius:.5rem;
                    border:1px solid var(--primary);
                    outline:none;
                    color: #fff;
                    background:var(--bordeaux);
                    align-self:center;
                    cursor:pointer;
                    margin:.5rem;
                }    

                .overlay {
                    position:fixed;
                    top:0;
                    left:0;
                    height:100vh;
                    width:100vw;
                    display:grid;
                    place-items:center;
                }

                .confirmation_modal {
                    background: var(--secondary);
                    border-radius:1rem;
                    border:1px solid var(--primary);
                    padding:1rem;
                }
            `}</style>
        </>
    )
}