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
            </section>
        </>
    )
}