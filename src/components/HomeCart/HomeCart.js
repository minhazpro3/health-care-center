
import { Link } from 'react-router-dom';
import './HomeCart.css'

const HomeCart = ({service}) => {
    const {name,description,img,id}=service;
    


   
    return (
       
         <div>
           <div className=" carts  py-3">
             <div className="cart card-height">
               <img src={img} className="image  card-img-top" alt="..."/>
            <div className="card-body">
         <h5 className="card-title ">{name}</h5>
         <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between pt-3"> 
         <Link to={`/Booking/${id}`}><button className="btn border-0 bg-success btn-sm px-3 py-2">Booking now </button></Link>
           </div>
         </div>
            </div>
           </div>
         </div>
      
  
         
      
    );
};

export default HomeCart;