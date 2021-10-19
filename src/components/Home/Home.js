import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import HomeCart from '../HomeCart/HomeCart';



const Home = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div> 
        <div className="container">

            <h3 className="fw-bold mt-4 border-bottom text-center ">Our services</h3>
            <div className="row row-cols-1 row-cols-md-3 ">
                {
                    services.map(service => <HomeCart key={service.id} service={service}></HomeCart>)
                }
            </div>
       
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;