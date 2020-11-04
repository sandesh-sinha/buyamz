import React from 'react'
import './Product.css';
import Rating from '@material-ui/lab/Rating';
import {useStateValue} from './StateProvider'
import {v4} from 'uuid'
function Product({title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : v4(),
                title,
                image,
                price,
                rating
            }
        })
    }   
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <p>
                        <Rating name='rating' value={rating} disabled/>
                    </p>
                </div>
            </div>
            <img src={image} alt='alt'/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
