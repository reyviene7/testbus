import React from 'react'
import './Gcash.css';
import bus from '../assets//purplebus.png';
import gcash from '../assets/GCash-Logo.png';


function Gcash (){
  return (
    <>
    <div className='Gcash-header'>
        <div className='Gcashdocument'>
            <div className='Gdiffer'>REFERENCE NUMBER:      123456789ABCD</div>
            <div className='Gcolomin'>
                <div className='Gbanks'><br/>
                    <img src={gcash} className='Gbanker' alt=''></img><br/>
                </div>
                <br/>                <br/>
                <br/>
                <br/>

                        <div className='Gpayin'>GCASH NUMBER</div><input type='text'/><br/>
                        <br/>
                        <div className='Gpaying'>AMOUNT</div><input type='text'/>
                <br/>
                <div className='Gpays'><a href='/success'>
                    <input type='submit' value="SEND" className='Gpaynext'/>  </a>      
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

export default Gcash