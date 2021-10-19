import React from 'react';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';


import Home from '../Home/Home';
import ServicePay from '../ServicePay/ServicePay';
import './Header.css'

const Header = () => {
    return (
      <div>
            <div className="banner">
      
      <div className="header-text">
        <h2> Welcome to our healthcare <span className="text-warning ">organization</span> !!</h2>
        <h5 className="health">Health is wealth Remember this</h5>
       <Link to="/doctor"> <button className=" btn rounded-pill border-0 px-5 py-1 bg-success text-white ">View more</button></Link>
      </div>
         
      </div>
      <Home></Home>
      
      </div>
    );
};

export default Header;