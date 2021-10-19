
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './Doctors.css'
const Doctors = () => {

    const [doctors, setDoctors]=useState([]);
    
    console.log(doctors);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/minhazpro3/doctors-fakeData-ass-ten/main/doctors-fakeData.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])

   
    
    return (
        <div> <h3 className="text-center over">Our Doctors</h3>
      
        <div className="border-2 pb-3">
            {
            doctors.map(doctor=> <div className="border border-warning border-4 p-3 m-2 doctorCart ">
               
              <div className="textImg-DIv align-items-center gap-4">
                  
            <div className="col-md-6 p-3">
            <div className="mb-3">
              <img src={doctor.img} alt=""/>
              </div>
           <div>
           <h3> {doctor.name}</h3>
            <h4> {doctor.experience}</h4>
            <h5>{doctor.job}</h5>
            <h6><i class="fas fa-phone-square-alt"></i> +{doctor.phone}</h6>
          <h4>  <i class="far fa-hospital"></i> {doctor.hospital}</h4>
           </div>
            </div>
            <div className="col-md-6">
               <div className="p-3"> <h4>Description: about his/her profession.</h4>
                <p>{doctor.description}</p></div>
            </div>
              </div>
                </div>)
            }
           
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Doctors;