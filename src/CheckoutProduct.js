import React from 'react';
import './CheckoutProduct.css'
import Rating from '@material-ui/lab/Rating'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, image, title , price, rating}) {
    const [{bakset}, dispatch]= useStateValue()
    const removeFromBasket = () => {
        dipatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='CP'/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    <Rating name='rating' value={rating} disabled/>
                </div>
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    )
}

export default CheckoutProduct
