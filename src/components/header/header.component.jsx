import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo2.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import '../../App.css';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as Shopbag } from '../../assets/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/user3.svg';
import { ReactComponent as Email } from '../../assets/email.svg';


const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
          <div className="nav-box">
            <CustomButton className="btn btn-dark">Shop</CustomButton>
          </div>
      </Link>
      <Link className='option' to='/contact'>
          <div className="nav-box">
            <Email className="nav-icon" /> 
            <h4>Contact</h4> 
          </div>
      </Link>
      
      <Link className='option' to='/shoppingcart'>
          <div className="nav-box">
            <Shopbag className="nav-icon" /> 
            <h4>Shopping Bag</h4> 
          </div>
      </Link>
      {
        //Signed in or Out
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> 
          <Link className='option' to='/'>
            <div className="nav-box">
              <User className="nav-icon" /> 
              <h4>Sign Out</h4> 
            </div>
          </Link>
        </div>
        :
        <Link className='option' to='/signin'>
          <div className="nav-box">
            <User className="nav-icon" /> 
            <h4>Sign In</h4> 
          </div>
        </Link>
      }
    </div>
  </div>
);

export default Header;
