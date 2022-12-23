import React from 'react'
import './Home.css';
import pic1 from '../assets/2.jpg';
import pic2 from '../assets/3.jpg';
import pic3 from '../assets/4.jpg';
import {BsSearch} from 'react-icons/bs'
import calendar from '../assets/calendar.JPG';
import disk from '../assets/desk.png';



const Home = () => {
  

  return (
    <>
          <header className="App-header">
            
            <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
              <p className='search_p'>SEARCH TRIP</p>
              <ul className='search'>
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
              <a href='/book'><button><BsSearch/></button></a>
              </li>
              </ul>
            </div>
            
            </div>
          <div className='content'>
           <div className='cards'>
              <article className='card'>
              <img src={pic3} alt=''></img>
              </article>
              <article className='card'>
              <img src={pic2} alt=''></img>
              </article>
              <article className='card'>
              <img src={pic1} alt=''></img>
              </article>
              
            </div>
            </div>
            
            </div>
              
              <div className='list'>
                <p className='title'>THE WHEELS ON THE GO</p>
                <div className='list_card'>
                <p className='subtitle'>ILIGAN TO CDO
                <p className='subsubtitle'>FIRST TRIP 4:00 AM<br/>LAST TRIP 5:30 PM</p></p>
                <article className='calen'>
                <img src={calendar} alt=''></img>
                </article>
                <article className='disk'>
                <img src={disk} alt=''></img>
                </article>
                </div>
              
              </div>
              <br/>
          </header>
        </>
  )
}

export default Home