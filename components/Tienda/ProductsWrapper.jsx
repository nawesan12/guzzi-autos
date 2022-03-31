import Product from './Products/Product'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/getData'

export default function ProductsWrapper({ itemsSelected, query }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData('productos', setProducts)
    }, [])

    return (
        <>
            <section className="products-wrapper">
                {
                products.map((product, index) => (
                    <Product 
                        key={index}
                        productName={product.name}
                        productDescription={product.description}
                        productImage={product.image}
                        productWarnings={product.precauciones}
                        productPresentations={product.presentaciones}
                        productPrologue={product.prologo}
                        productSubtitle={product.subtitle}
                        productUse={product.uso}
                        itemsSelected={itemsSelected} 
                    />
                ))
                }
                <Product productImage="/images/backgrounds/home3.jpg"/>
                <Product productImage="/images/backgrounds/home3.jpg" />
                <Product productImage="/images/backgrounds/home3.jpg" />
                <Product productImage="/images/backgrounds/home3.jpg" />
                <Product productImage="/images/backgrounds/home3.jpg" />
            </section>

            <style jsx>{`
                .products-wrapper {
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    width:45vw;
                    background: #fff;
                    border: 2px solid #eee;
                    border-radius:.4rem;
                    padding: 2.5rem 1.4rem 1.5rem;
                }    

                @media screen and (max-width:1200px) {
                    .products-wrapper {
                        width:97.5vw;
                        margin:auto;
                        padding: 2.5rem 1rem;
                    }
                }
            `}</style>
        </>
    )
}