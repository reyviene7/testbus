import React from 'react'
import './payment.css';
import paypal from '../assets/paypal.png';
import mastercard from '../assets/mastercard.png';
import gcash from '../assets/GCash-Logo.png';


function Payment (){
  return (
    <>
    <div className='Payment-header'>
        <div className='paymentdocument'>
            <div className='paymentb'>
            <h1 className='fonter'>MODE OF PAYMENT</h1>
            <ul className='listpayment'><li>
            <a href='/paypal'>
            <img src={paypal} className='optionsp' alt=''></img></a></li>
            <li><a href='/paypal'>
            <img src={mastercard} className='optionsp' alt=''></img></a></li>
            <li><a href='/Gcash'>
            <img src={gcash} className='optionsp' alt=''></img></a></li>
            </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default Payment