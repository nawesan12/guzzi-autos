
import { uploadData } from '../../../utils/uploadData'

export default function OrderController({ order, setOrder }) {

    const generateOrderId = () => {
        setOrder({...order, orderId: crypto.getRandomValues(new Uint16Array(6))[0]})
    }

    const uploadOrder = async () => {
        generateOrderId()
        if (order.orderId === null || order.items.length === 0 || order.clientName === '' || order.clientEmail === '' || order.clientPhone === '') {
            alert('Te falto algo por rellenar!')
        } else {
            await uploadData(order, 'pedidos', () => {
                console.table(order)
            })   
        }
    }

    return (
        <>
            <button onClick={uploadOrder}>
                FUNCIONAR
            </button>
        </>
    )
}