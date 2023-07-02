import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-slate-100 py-20'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                    <img className='w-16 h-16' src={Logo} alt="Logo" />
                    <div className='mt-3'>
                        <p className='mb-1 text-base font-medium'><strong>Address:</strong> AAAAAAAAAAAAAA</p>
                        <p className='mb-1 text-base font-medium'><strong>Phone:</strong> 01722824160</p>
                        <p className='mb-1 text-base font-medium'><strong>Email:</strong> developersridoy@gmail.com</p>
                    </div>
                    <div className='flex gap-2 mt-5'>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaFacebookF /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaInstagram /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaTwitter /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaLinkedin /></Link>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-10'>Useful Link</h3>
                    <ul>
                        <Link className='block text-lg font-medium mb-1' to={``}>Home</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Place</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Hotel</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Resturent</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Contact</Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-10'>Support</h3>
                    <ul>
                        <Link className='block text-lg font-medium mb-1' to={``}>Help Center</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Terms and Condition</Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-10'>Letest News</h3>
                    <ul>
                        <Link className='block text-lg font-medium mb-1' to={``}>Blog -1</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Blog -1</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Blog -1</Link>
                        <Link className='block text-lg font-medium mb-1' to={``}>Blog -1</Link>
                    </ul>
                </div>
            </div>
            <div className='text-center pt-7'>
                <p className='text-base font-medium'>Copyright 2022-2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer