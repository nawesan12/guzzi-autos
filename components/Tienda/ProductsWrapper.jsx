import Product from './Products/Product'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/getData'

export default function ProductsWrapper({ itemsSelected }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData('products', setProducts)
    }, [])

    return (
        <>
            <section className="products-wrapper">
                {
                    products.map(product => {
                        return (
                            <Product 
                                key={product.id} 
                                productName={product.name}
                                productDescription={product.description} 
                                productImage={product.image}
                                itemsSelected={itemsSelected} 
                            />
                        )
                    })
                }
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
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
                    padding: 2.5rem 1.5rem 1.5rem;
                }    

                @media screen and (max-width:1200px) {
                    .products-wrapper {
                        width:95vw;
                        margin:auto;
                        padding: 2.5rem 1rem;
                    }
                }
            `}</style>
        </>
    )
}