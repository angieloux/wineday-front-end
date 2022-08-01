import React from 'react';
import cartIcon from '../../../assets/cart-icon.png'
import './cart-icon.styles.scss'

const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <img src={cartIcon} alt="Cart Icon" />
            <span className="cart-count"> 1 </span> 
        </div>
    );
}

export default CartIcon;