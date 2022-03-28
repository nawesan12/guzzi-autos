import { useState } from 'react'
import CartModal from "./Cart/CartModal";

export default function Main() {

    const [itemsSelected, setItemsSelected] = useState([]);

    return (
        <>  
            <CartModal itemsSelected={itemsSelected}/>            
        </>
    )
}