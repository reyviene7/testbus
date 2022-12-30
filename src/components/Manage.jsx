import React from 'react'
import './Manage.css';


function Manage (){
  return (
    <>
    <div className='Manage-header'>
        <div className='managedocument'>
            <div className='distance'>
                <div>
                cancel booking
                </div>
                    <div>
                    rebook ticket
                    </div>
                        <div>
                        PROCEED PAYMENT
                        </div>
            </div>
                <div className='colon'>
                    <div>REFERENCE NUMBER:      123456789ABCD</div>
                    <h4>Name: James Chapmon</h4>
                    <h4>Age:  25 year's old</h4>
                    <h4>Destination: <br/>
                        from CAGAYAN DE ORO     NOVEMBER 12,2022 11:00AM<br/>
                        to ILIGAN CITY          NOVEMBER 12,2022 2:00PM
                    </h4>
                    <h4>Contact Number: 09123456789</h4>
                    <h4>Bus Detail: <br/>
                                    Station 1<br/>
                                    AIRCONDITIONED
                    </h4>
                    <h4>Driver: Richard Macarambon</h4>
                    <h4>Plate Number: GAE 1234</h4>
                    <h4>ADD ONS: <br/>
                        SEAT    2C</h4>
                        <br></br>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Manage