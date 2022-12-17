import React from 'react'
import logo from '../assets/logo.png'
import './NavBar.css';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const NavBar = () => {
  return (
    <>
    <nav>
        <div className='logo'>
       <a href='index.html'> <img src = {logo} alt=''/></a>
       </div>
       <div> 

       <ul id='navbar'>
        <li>
            <a className='active' href='index.html'>BOOK</a>
        </li>
        <li>
            <a href='index.html'>MANAGE</a>
        </li>
        <li>
            <a href='index.html'>TRAVEL INFO</a>
        </li>
        <li>
            <a href='index.html'>ABOUT</a>
        </li>
       </ul>
        
       <ul id='social'>
        <li>
            <a href='index.html'> <BsFacebook className='icons'/></a>
        </li>
        <li>
            <a href='index.html'> <BsInstagram className='icons'/></a>
        </li>
        <li>
            <a href='index.html'> <BsTwitter className='icons'/></a>
        </li>
       </ul>
       </div>
    </nav>
    </>
  )
}

export default NavBar