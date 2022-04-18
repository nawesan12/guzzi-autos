export default function ProductDetail(props) {

    return (
        <>
        <section className="product_overlay">
            <section className="product_details">
                <span className="close_modal" onClick={() => props.setDetailsOpen(false)}>X</span>
                <h3>{props.name}</h3>
                <h3>${props.price}</h3>
                <p>{props.description}</p>
                <button onClick={props.addToCart}>Añadirrr</button>
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

            .close_modal {
                float:right;
                font-size:1.5rem;
                font-weight:bold;
                cursor:pointer;
            }

            .product_overlay {
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

            .product_details {
                height:70vh;
                width:70vw;
                border-radius:3rem;
                background:var(--primary-text);
                padding:1.5rem;
                position:relative;
                animation: fadeIn .5s ease-in-out;
            }    
        `}</style>
        </>
    )
}