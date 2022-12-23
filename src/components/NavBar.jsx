import React from 'react'
import logo from '../assets/logo.png'
import './NavBar.css';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

function NavBar() {
  return (      
    <nav>
        
       <div> 
       <ul id='navbar'>
       <div className='logo'>
       <a href ='/'> <img src = {logo} alt=''/></a>
       </div>
       <CustomLink href='/book'>BOOK</CustomLink>
       <CustomLink href='/'>MANAGE</CustomLink>
       <CustomLink href='/'>TRAVEL INFO</CustomLink>
       <CustomLink href='/'>ABOUT</CustomLink>
       </ul>
            
       <ul id='social'>
       <CustomLink href='/'><BsFacebook className='icons'/></CustomLink>
       <CustomLink href='/'><BsInstagram className='icons'/></CustomLink>
       <CustomLink href='/'><BsTwitter className='icons'/></CustomLink>
       </ul>   
       </div>
    </nav>
  )
}

function CustomLink({ href, children, ...props }){
    return(
        <li>
            <a href={href}>{children}</a>
        </li>
    )
}

export default NavBar