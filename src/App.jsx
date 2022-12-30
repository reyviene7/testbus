import './App.css';
import * as React from "react";
import NavBar from './components/NavBar';
import Book from './components/Book';
import Home from './components/Home';
import Booking from './components/Booking';
import Document from './components/Document';
import Manage from './components/Manage';
import Payment from './components/payment';
import Paypal from './components/paypal';
import Gcash from './components/Gcash';
import Success from './components/success';
import View from './components/view';


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
    case "/document":
      component = <Document />
      break
    case "/manage":
      component = <Manage />
      break
    case "/payment":
      component = <Payment />
      break
    case "/paypal":
      component = <Paypal />
      break
    case "/Gcash":
      component = <Gcash />
      break
    case "/success":
      component = <Success />
      break
    case "/view":
      component = <View />
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
