import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/PlaceOrder/Placeorder';
import ExplorerMenu from './components/ExplorerMenu';
import Footer from './components/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup';

function App() {

  const [showLogin,setShowLogin]=useState(false)

  return (

    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
