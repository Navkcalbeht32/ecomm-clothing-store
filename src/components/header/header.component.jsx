import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo2.svg';
import './header.styles.scss';
import '../../App.css'

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
      <button className="btn">
            SHOP
        </button>
      </Link>
      <Link className='option' to='/contact'>
        <button className="btn">
            CONTACT
        </button>
      </Link>
    </div>
  </div>
);

export default Header;
