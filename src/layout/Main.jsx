import React from 'react'
import Header from '../components/Sheare/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Sheare/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main