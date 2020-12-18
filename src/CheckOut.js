import React from 'react'
import { useStateValue } from "./StateProvider"
import './CheckOut.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from "react-currency-format"

function CheckOut() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_add" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="" />
        {basket?.length === 0 ?
        (
            <div>
                <h2>Your shopping basket is Empty!!!!</h2>
                <p>
                You have no items in your basket. To buy one or more please click 
                "Add to basket" next to item!
                </p>
            </div>
        ):(
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {/* List out all of the checkout products */}
                {basket.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                )
                )}
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
        </div>
    );
}

export default CheckOut
