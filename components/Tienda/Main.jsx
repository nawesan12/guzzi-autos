import { useState } from 'react'

import CartModal from "./Cart/CartModal";
import ProductsWrapper from './ProductsWrapper';
import SearchColumn from './SearchColumn';

export default function Main() {

    const [itemsSelected, setItemsSelected] = useState([]);

    return (
        <>
        <section className="store_main">  
            <SearchColumn />
            <ProductsWrapper setItemsSelected={setItemsSelected} itemsSelected={itemsSelected}/>
            <CartModal itemsSelected={itemsSelected}/>     
        </section>

        <style jsx>{`
            .store_main {
                min-height:78vh;
                width:100%;
                display:flex;
                flex-wrap:wrap;
                justify-content:center;
                background:var(--secondary);
                color: var(--secondary-text);
                padding: 5vh 0 5vh 0;
            }    
        `}</style>
        </>
    )
}