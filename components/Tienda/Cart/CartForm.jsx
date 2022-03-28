import { handleInput } from '../../../utils/handleInput'

export default function CartForm({ setOrder, order, children }) {
    return (
        <>
            <input type="text" placeholder="Nombre" onChange={(value) => handleInput('clientName', value, setOrder, order)} />
            <input type="text" placeholder="Email" onChange={(value) => handleInput('clientEmail', value, setOrder, order)} />
            <input type="text" placeholder="Teléfono" onChange={(value) => handleInput('clientPhone', value, setOrder, order)} />
            {children}
        </>
    )
}