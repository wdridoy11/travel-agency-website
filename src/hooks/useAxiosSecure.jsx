import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     axiosSecure.interceptors.request.use((config)=>{
    //         const 
    //     })
    // },[])

  return (
    <div>

    </div>
  )
}

export default useAxiosSecure