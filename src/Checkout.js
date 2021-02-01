import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ basket, user } , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.seoclerk.com/pics/000/674/376/25c82fd819e4c28f92d188f6489ed893.jpg" alt=" " />

                <div> 
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Cart</h2>         

                 {basket.map(item => (
                     <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                 ))}

                </div>
            </div>


            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
