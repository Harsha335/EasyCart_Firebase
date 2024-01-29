import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './context/UserAuthContext';

const ProtectedRoute = ({children}) => {
    const {user}=useUserAuth();
    // for(let x in user){

    //   alert(x+" "+user[x]);
    // }
    // alert(user);
    // if(localStorage.getItem("user"))
    // {
    //     user = localStorage.getItem("user");
    // }
      // alert(user);
    if(user === null)
    {
        return <Navigate to="/login"/>
    }
  return children;
}

export default ProtectedRoute;
