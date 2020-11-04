import React, { Fragment } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <Fragment>
            <div className='header'>
                <Link to='/'>
                    <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'  className='header__logo' alt='header__logo'/>
                </Link>
                <div className='header__search' >
                    <input className='header__searchInput' type='text' /> 
                    <SearchIcon className='header__searchIcon' />
                </div>
                <div className='header__nav' >
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>Orders</span>    
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>5</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
