export default function ProductDetail(props) {

    return (
        <>
            <section className="product_details">
                <button onClick={props.addToCart} >Añadirrr</button>
            </section>
        </>
    )
}