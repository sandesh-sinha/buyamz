import React from 'react'
import './Product.css';
import Rating from '@material-ui/lab/Rating';

function Product({title, image, price, rating}) {
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
            <button>Add to basket</button>
        </div>
    )
}

export default Product
