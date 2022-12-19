import {Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from './Book';
import React from 'react'
import logo from '../assets/logo.png'
import './NavBar.css';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const NavBar = () => {
  return (
    <>
    <Router>
      
    <nav>
        <div className='logo'>
       <Link to='/' target="_self"> <img src = {logo} alt=''/></Link>
       </div>
       <div> 

        
       <ul id='navbar'>
        <li>
            <Link to='/book' target="_self">BOOK</Link>
        </li>
        <li>
            <Link to='/'>MANAGE</Link>
        </li>
        <li>
            <Link to='/'>TRAVEL INFO</Link>
        </li>
        <li>
            <Link to='/'>ABOUT</Link>
        </li>
       </ul>
            
       <ul id='social'>
        <li>
            <Link to='/'> <BsFacebook className='icons'/></Link>
        </li>
        <li>
            <Link to='/'> <BsInstagram className='icons'/></Link>
        </li>
        <li>
            <Link to='/'> <BsTwitter className='icons'/></Link>
        </li>
       </ul>
       <Routes>
        <Route path="book" element={<Book />}/>
          
      </Routes>
       </div>
    </nav>
    
    </Router>
    </>
  )
}

export default NavBar