import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Navigation = () => {
  const {user,logOut}=useAuth();
  console.log(user);
  
    return (
        <div className=" bg-light">
        <Navbar   variant="light" className="justify-content-between container" >
          
           <div>
                <img style={{width: '65px'}} className="" src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Medical-healthy-clinic-logo-concept-by-DEEMKA-STUDIO-1-580x406.jpg" alt="" />
            </div>
           
            <div className=" d=flex gap-3">
              
               <div className="d-flex ">
               <div>
                 {
                   
                 }
               </div>
              { user.email ? <div className="d-flex">
                <p className="userName fst-italic"> {user?.displayName}</p>
              </div>: ""
                }
                <Link className="mx-2 fst-italic text-decoration-none text-info" to="/home">Home</Link>
               
               <Link className="fst-italic text-decoration-none text-info"  to="/doctor">Doctors</Link>
               <Link  className="ms-2 fst-italic text-decoration-none text-info" to="/about">About</Link>
               
               <div>
           { user?.email ? <Link to="/home">  <button onClick={logOut} className="border-0 bg-primary ms-2 text-white px-2 py-1 rounded-3 fst-italic "  ><i className="fas fa-sign-out-alt"></i> Logout</button> </Link>
             :
             <Link to="/login"><button className="border-0 mx-2 bg-light fst-italic  text-primary" type="button"  >Login</button></Link>
            }
           </div>
              </div>
          
            </div>
    </Navbar>
  
  </div>
    );
};

export default Navigation;