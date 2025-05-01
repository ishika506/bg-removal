import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import BuyCredit from './pages/BuyCredit/BuyCredit';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './index.css'; // Make sure this CSS file is imported
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className="app-container">
      <ToastContainer />
      <Navbar />
      
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
