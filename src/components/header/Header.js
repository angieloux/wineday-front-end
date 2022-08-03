import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import CartIcon from '../cart/cart-icon/CartIcon';
import logoIcon from '../../assets/logo.png'

export const Header = () => {
    return (
        <nav className='nav-menu container'>
      <div className='logo'>
            <img src={logoIcon} alt="Logo Icon"/>
            <Link to='/'>WINEDAY</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/products'>
            Shop
          </Link>
        </li>
        {/* {
          !user && 
          <li>
            <Link to='/sign-in'>
              Sign In
            </Link>
          </li>
        } */}
        {/* {
          user && 
          <li onClick={() => auth.signOut()}>
            Sign Out
          </li>
        }  */}
        {/* {
          !user && 
          <li>
            <Link to='/sign-up'>
              Sign Up
            </Link>
          </li>
        } */}
      </ul>
      <CartIcon />
    </nav>
  );
}

export default Header;