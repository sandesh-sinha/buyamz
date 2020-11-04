import React , {useState} from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={ (value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button onClick={ e => history.push('/payment')}>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal
