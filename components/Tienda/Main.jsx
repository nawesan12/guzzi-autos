import { useState } from 'react'
import CartModal from "./Cart/CartModal";
import ProductsWrapper from './ProductsWrapper';

export default function Main() {

    const [itemsSelected, setItemsSelected] = useState([]);

    return (
        <>  
            <ProductsWrapper setItemsSelected={setItemsSelected} itemsSelected={itemsSelected}/>
            <CartModal itemsSelected={itemsSelected}/>     
        </>
    )
}