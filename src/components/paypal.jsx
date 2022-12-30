import React from 'react'
import './paypal.css';
import bank from '../assets/bank.png';
import bus from '../assets//purplebus.png';


function Paypal (){
  return (
    <>
    <div className='Paypal-header'>
        <div className='paypaldocument'>
            <div className='differ'>REFERENCE NUMBER:      123456789ABCD</div>
            <div className='colomin'>
                <div className='banks'><br/>
                    <img src={bank} className='banker' alt=''></img><br/>
                    <div className='classic'>YOUR BANK</div>
                </div>
                <br/>
                        <div className='payin'>ACCOUNT NUMBER</div><input type='text'/><br/>
                        <br/>
                        <div className='paying'>AMOUNT</div><input type='text'/>
                <br/>
                <div className='pays'><a href='/success'>
                    <input type='submit' value="SEND" className='paynext'/>  </a>      
                </div>
            </div>

            <div>
            <img src={bus} className='bus' alt=''></img>

            </div>

            
        </div>
    </div>
    </>
  )
}

export default Paypal