import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo2.svg';
import './header.styles.scss';
import '../../App.css';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        <CustomButton className="btn btn-dark">Shop</CustomButton>
      </Link>
      <Link className='option' to='/contact'>
        <CustomButton className="btn btn-dark">Contact</CustomButton>
      </Link>
      <Link className='option' to='/signin'>
        <CustomButton className="btn btn-light">Contact</CustomButton>
      </Link>
    </div>
  </div>
);

export default Header;
