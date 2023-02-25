import React from 'react'
import './Navbar.css';
import logo from '../../assets/lavish_world_logo.png';
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai"
import Signin from '../Auth Components/Signin';

import CartDrawer from '../../Pages/Cart/cartdrawer';

const Navbar = () => {
  return (
    <>
      <div className='nav-offer'>
          <p>Save upto 70% off  |  <span className='shopnow' style={{cursor:"pointer"}}> Shop Now </span></p>
      </div>
      <div className='main-nav'>     
        <div className='top-nav'>
          <div className='app-logo'>
            <img src={logo} alt="lavish-logo" />
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='Search' />
            <BsSearch className='search-icon' />
          </div>
          <div className='cart-section'>
            <div className='cart-icons'>
              <Signin/>
              <FiHeart className='icons' />
              <CartDrawer/>
            </div>

          </div>
        </div>
        <div className='bottom-nav'>
          <ul>
            <li>New</li>
            <li>Massage</li>
            <li>Wellness</li>
            <li>Sleep</li>
            <li>Home</li>
            <li>Wine & Bar</li>
            <li>Fitness</li>
            <li>Outdoor</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Accessories</li>
            <li>Entertainment</li>
            <li>Gifts</li>
            <li>Sale</li>

          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar