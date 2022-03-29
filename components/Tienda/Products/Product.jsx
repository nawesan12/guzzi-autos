import ProductDetail from "./ProductDetail";

export default function Product({ itemsSelected }) {

    const addToCart = (item) => {
        itemsSelected.push(item)
    }
    
    return(
        <>
            <article className="product">

            </article>

            <ProductDetail />
        </>
    )
}