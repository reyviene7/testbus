import React from 'react'
import './Booking.css';

function Booking (){
  return (
    <div className='Booking-header'>
        <div className='listbooking'>
                <div className='column'>
                    <form>
                        <h3>FIRST NAME</h3><input type='text'/>
                        <h3>LAST NAME</h3><input type='text'/>
                        <h3>AGE</h3><input type='text'/>
                        <h3>CONTACT NUMBER</h3><input type='text'/>
                        <h3>DESTINATION</h3>
                        <ul className='Listing'>
                            <li>
                                <select name="city" className='Listingform'>
                                <option>--From--</option>
                                <option>Iligan City</option>
                                <option>Lugait</option>
                                <option>Manticao</option>
                                <option>Naawan</option>
                                <option>Initao</option>
                                <option>Cagayan De Oro</option>
                                </select>
                            </li>
                            <li>
                                <select name="city" className='Listingform'>
                                <option>--To--</option>
                                <option>Iligan City</option>
                                <option>Lugait</option>
                                <option>Manticao</option>
                                <option>Naawan</option>
                                <option>Initao</option>
                                <option>Cagayan De Oro</option>
                                </select>
                            </li>
                        </ul>
                    </form>
                    
                </div>
                <div className='forming'>
                <form>
                    <input type='radio' name='options' value='Aircon'/> AIRCONDITIONED
                    <input type='radio' name='options' value='Non'/>  NON-AIRCONDITIONED                 
                </form>
                <br/>
                <div>ARE YOU PREGNANT</div>
                <form>
                    <input type='radio' name='condition' value='Ayes'/> YES
                    <input type='radio' name='condition' value='No'/>  NO                 
                </form>
                <br/>

                <div>PERSON WITH DISABILITY</div>
                <form>
                    <input type='radio' name='ondition' value='Ayes'/> YES
                    <input type='radio' name='ondition' value='No'/>  NO                 
                </form>
                <br/>

                <div>ADD-ONS</div>
                <form>
                    <input type='radio' name='ondition' value='Ayes'/> BAGGAGE
                    <input type='radio' name='ondition' value='No'/>  SEAT               
                </form>
                </div>
                <div className='nextpoint'><a href='/document'>
                <input type='submit' value="Next" className='next'/>  </a>      
                </div>
        </div>
    </div>
  )
}

export default Booking