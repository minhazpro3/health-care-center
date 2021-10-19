import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {userRegister,userLogin,siningWithgoogle,error,user}=useAuth();
    const history = useHistory();
    const location =useLocation();
    const goToTarget = location.state?.from ||  "./home";
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleGoogleToRight = ()=>{
        siningWithgoogle()
        .then((result) => {
           history.push(goToTarget)
           
          })
    }

    

    const emailCatch = (e)=>{
        setEmail(e.target.value);
    }

    const passwordCatch = (e)=>{
        setPassword(e.target.value);
    }

    const registerHandel = ()=>{
        userRegister(email,password)

    }
    
    const userHandel = ()=>{
        userLogin(email,password)
        history.push(goToTarget)
    }

    return (
        <div>
           
            <div className="login p-4">
            <h2 className="pt-0 text-center">Register/Login Form</h2>
                <input onChange={emailCatch} className="py-1 w-100 px-2 my-3 rounded-2 border-0" type="email" placeholder="Enter email" required />
               
                <br/>
                <input onChange={passwordCatch} className="py-1 w-100 px-2  rounded-2 border-0 mb-2" type="Password" placeholder=" password" required />
               { !user?.email ? <p>{error}</p>: ""}
                {user?.email? <p>Please login now !!!!</p>: []}
                <div className="d-flex gap-4">
                <button onClick={registerHandel} className=" btn text-white border-0 px-3 bg-primary rounded-3 px-2 btn-sm">Register</button>
                <button onClick={userHandel} className=" btn border-0 text-white fw-medium px-3 bg-primary rounded-3 px-2 btn-sm">Login</button>
            </div>
            <button onClick={handleGoogleToRight} className=" btn border-0 text-white justify-content-left px-3 bg-primary rounded-3 px-2 btn-sm ms-0 mt-3"><i className="fab fa-google-plus-g"></i> signin google</button>
            </div>
           
        </div>
    );
};

export default Login;