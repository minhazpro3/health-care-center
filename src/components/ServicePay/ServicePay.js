import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServicePay.css'
import Swal from 'sweetalert2'

const ServicePay = () => {
    const {orderId}=useParams();
    const [information,setInformation]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/minhazpro3/hospital-fakeData/main/fakeData.json')
        .then(res=>res.json())
        .then(data=>setInformation(data))
    },[])

        const items = information.filter(item=>item.id==orderId)


        function sweetAlert (){
            Swal.fire({
                title: 'Payment successful!',
                text: 'Thank you so much.',
                icon: 'success',
                confirmButtonText: 'Ok'
              }) 
              return
        }
    
    return (
        
            
          <div className=" justify-content-center text-center payCart  p-3">
              <div className="d-flex align-items-center  gap-3">
                  <div>
                     <p className="text-warning"> Super<span className="text-danger"> Discount!!!</span></p>
                  </div>
                  <img className="payCartImg" src={items[0]?.img} alt=""/>
              </div>

              <div>
             <small className="text-success">1st February 2022 to 31th February 2022</small>
              </div>
            <div>
             <h5> {items[0]?.name}  </h5>
           <p> {items[0]?.description}  </p>

           
           </div>
           <div className="d-flex justify-content-between align-items-center">
             <Link to="/home"> <button  onClick={sweetAlert} className="btn bg-info btn-sm px-3 text-white ">pay</button></Link>
           <small className="text-success"> only $ {items[0]?.price}</small>
           
           </div>
          </div>
          
       
    );
};

export default ServicePay;