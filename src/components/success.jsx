import React from 'react'
import './success.css';
import bus from '../assets//purplebus.png';
import check from '../assets/check.png';


function success (){
  return (
    <>
    <div className='SPaypal-header'>
        <div className='Spaypaldocument'>
            <div className='Scolomin'>
                <div className='Sbanks'><br/>
                    <img src={check} className='Sbanker' alt=''></img><br/>
                </div>
                <br/>
                        <div className='Spayin'>Booked Succesfully</div><br/>
                        <br/>
                        <a href='/view' className='Spaying'>View Status</a>
                <br/>
                
            </div>

            <div>
            <img src={bus} className='bus' alt=''></img>

            </div>

            
        </div>
    </div>
    </>
  )
}

export default success