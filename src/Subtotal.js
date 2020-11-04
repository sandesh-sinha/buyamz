import React , {useState} from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [total, setTotal] = useState(0)
    // useEffect(() => {
    //     setTotal(basket.map( (item)=> ))
    // }, [])
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
            <button>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal
