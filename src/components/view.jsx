import React from 'react'
import './view.css';
import check from '../assets/check.png';


function view (){
  return (
    <>
    <div className='VPaypal-header'>
        <div className='Vpaypaldocument'>

            <div className='Vcolomins'>
                <div className='Vbanks'><br/>
                    <img src={check} className='Vbanker' alt=''></img>
                </div>
                <br/>
                        <div className='Vpayin'>REFERENCE NUMBER<input type='text' className='texting'/></div><br/>
                        <br/>

                        <div className='Vpays'><a href='/success'>
                    <input type='submit' value="CHECK&#13;&#10;STATUS" className='Vpaynext'/>  </a>      
                    </div>
                <br/>
                
            </div>

            

            
        </div>
    </div>
    </>
  )
}

export default view