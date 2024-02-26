import React, { useState } from 'react';
import fakeData from '../EmaJon/Ema/src/fakeData'
import Product from './Product';
import Cart from './Cart';

const Shop = () => {

    const first10 = () => fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])


    const handleAddProduct = (product) => {
        // console.log('pro add')
        const newCart = [...cart, product];
        setCart(newCart);
    }


    console.log(fakeData)
    return (
        <div className='container'>
            <div className="">

                <div className='product-section '>
                    {
                        products.map(pd => <Product
                            handleAddProduct={handleAddProduct}
                            product={pd}></Product>)
                    }
                </div>
                <div className="cart-section">
                <Cart cart={cart}></Cart>
              
                </div>
            </div>
        </div>




    );
};

export default Shop;