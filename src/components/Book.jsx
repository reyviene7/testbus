import React, { useState } from 'react'
import './Book.css';
import {BsSearch} from 'react-icons/bs'
import disk from '../assets/desk.png';

function ClickMe(){
  alert('Hi!');
}

function Book (){
  const [date,setDate]=useState();

  console.log("Date", date);

  var curr = new Date();
  curr.setDate(curr.getDate() + 1);
  var datee = curr.toISOString().substring(0,10);
  

  return (
    <>
    <div className='Book-header'>
    <div className='container book__container'>
            <div className='book__me'>
            <div className='book__me-image'>
              <p className='searchbook_p'>SEARCH TRIP</p>
              <ul className='booksearch'>
              <li>
                <p>From</p>
              <input type='text' placeholder=''/>
              </li>
              <li>
              <p>To</p>
              <input type='text' placeholder=''/>
              </li>
              <li>
              <br/>
              <br/>
              <br/>
              <button onClick={ClickMe}><BsSearch/></button>
              </li>
              </ul>
            </div>
            
            </div>
            </div>
              
              <div className='listbook'>
                <div className='list_cards'><br/>
                
                <input className='inputlist' type='date' defaultValue={datee} onChange={e=>setDate(e.target.value)}/>
                
                <article className='bookdisk'>
                <img src={disk} alt=''></img>
                </article>
          <table>
          <tbody>
            <tr>
              <td>4:00 AM</td>
              <td>6:00 AM</td>
              <td><button onClick={ClickMe}>BOOK NOW</button></td>
            </tr>
            <tr>
              <td>6:30 AM</td>
              <td>8:30 AM</td>
              <td><button onClick={ClickMe}>BOOK NOW</button></td>
            </tr>
            <tr>
              <td>9:00 AM</td>
              <td>11:00 AM</td>
              <td><button onClick={ClickMe}>BOOK NOW</button></td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td>2:00 PM</td>
              <td><button onClick={ClickMe}>BOOK NOW</button></td>
            </tr>
            <tr>
              <td>2:30 PM</td>
              <td>4:30 AM</td>
              
              <td><button onClick={ClickMe}>BOOK NOW</button></td>
              
            </tr>
          </tbody></table>
          
                
                </div>
              </div>
              <br/>
              </div>
    </>
  )
}

export default Book