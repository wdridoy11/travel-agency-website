import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {

  const {user}=useContext(AuthContext);

    if(user){
      return children;
    }
  
  return <Navigate to={'/create_account'} replace={true}></Navigate>
}

export default PrivetRoutes