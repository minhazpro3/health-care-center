
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,GoogleAuthProvider ,signInWithPopup,onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";


import FirebaseInitializeApp from "../initializeApp";

FirebaseInitializeApp()
const useFirebase= ()=>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    
    const [error,setError]=useState('');
    const [isLoading,setIsloading]=useState(true)
    
    // signing with google
    const siningWithgoogle = ()=>{
      setIsloading(true)
      return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        
       
      })
      .finally(()=>setIsloading(false));
      
    }
    

    const userRegister = (email,password)=>{
      setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          
          // setUser(result.user);
          })
          .catch((error) => {
            setError(error.message) ;
              
            
            
            
          }).finally(()=>setIsloading(false));
         
          
    }
    

    

    const userLogin = (email,password)=>{
      setIsloading(true)
     return signInWithEmailAndPassword(auth, email, password)
     
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
         
        
        
      }).finally(()=>setIsloading(false));
    }
    

    const logOut = ()=>{
      setIsloading(true)
      signOut(auth).then(() => { }).finally(()=>setIsloading(false));
    }
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
         setUser({})
        }
        setIsloading(false)
      });
      return ()=> unsubscribe;
    },[])

    return {
        userRegister,
        userLogin,
        user,
        logOut,
        siningWithgoogle,
        error,
        isLoading
    }

}
export default useFirebase;