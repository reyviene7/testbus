import './App.css';
import NavBar from './components/NavBar';
import background from './assets/background.jpg';
import pic1 from './assets/2.jpg';
import pic2 from './assets/3.jpg';
import pic3 from './assets/4.jpg';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
        <div className="background"> 
        
          <header className="App-header">
            <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>

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
          </header>
        </div>
      </div> 
  );
}

export default App;
