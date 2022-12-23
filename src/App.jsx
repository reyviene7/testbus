import './App.css';
import * as React from "react";
import NavBar from './components/NavBar';
import Book from './components/Book';
import Home from './components/Home';
import Booking from './components/Booking';


function App() {
  
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/book":
      component = <Book />
      break
    case "/booking":
      component = <Booking />
      break
    default:
      break
  }

  return (
    <>
    <NavBar />
    {component}
    </>
    
  );
}

export default App;
