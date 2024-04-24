import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'

const MyBooking = () => {
    const {user}= useContext(AuthContext)
    const [myBooking,setMyBooking] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/my-booking?email=${user?.email}`)
       .then((res)=>res.json())
       .then((data)=>setMyBooking(data))
       .catch((err)=>console.log(err))
    },[])
    console.log(myBooking)
  return (
    <div>
        <h1>My Booking</h1>
        {myBooking.map((bookingInfo)=><>
            <h3>{bookingInfo.fname}</h3>
            <h3>{bookingInfo.lname}</h3>
        </>)}
    </div>
  )
}

export default MyBooking