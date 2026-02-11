import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterLine, RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import{FiPhoneCall} from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='border-t py-12 bg-black'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
            <div>
                <h3 className='text-lg text-slate-50 mb-4 font-semibold'>NewsLetter</h3>
                <p className='text-slate-50 mb-4'>
                    Be the first to hear about our products, exclusive events and online offers
                </p>
                <p className='font-medium text-sm text-slate-50 mb-6'>
                    Sign up and get 10% off on your first order
                </p>
                {/* Newsletter form */}
                <form className='flex '>
                    <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-black transition-all bg-[#2B2B2B]'  required/>
                    <button type='submit' className='bg-white text-black px-6 py-3 text-sm rounded-r-md rounded-l hover:bg-blue-700 hover:transition-colors duration-300'>
                        Subscribe
                    </button>
                </form>
            </div>
            {/* Shop links */}
            <div>
                <h3 className='text-lg text-slate-50 mb-4 font-semibold'> Shop</h3>
                <ul className='space-y-2 text-slate-50'>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Mens Casual</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Mens Sneakers</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Womens Casual</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Womens Sneakers</Link>
                    </li>
                </ul>
            </div>
            {/* Support Links */}
            <div>
                <h3 className='text-lg text-slate-50 mb-4 font-semibold'> Support</h3>
                <ul className='space-y-2 text-slate-50'>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Contact Us</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> FAQ</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-slate-400 transition-colors'> Features</Link>
                    </li>
                </ul>
            </div>
            {/* Follow us */}
            <div className='text-slate-50'>
                <h3 className='text-lg text-slate-50 mb-4 font-semibold'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer' className='hover:text-slate-400'>
                    <TbBrandMeta className='h-8 w-8'/>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer' className='hover:text-slate-400'>
                    <IoLogoInstagram className='h-8 w-8'/>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer' className='hover:text-slate-400'>
                    <RiTwitterXLine className='h-7 w-7'/>
                    </a>
                </div>
                <p className='text-slate-50'>Call Us</p>
                <FiPhoneCall className='inline-block mr-2 text-slate-50' />
                0123-456-7890
            </div>
        </div>
        {/* footer bottom */}
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className='text-gray-500 text-sm tracking-tighter text-center '>
                © 2025, CompileTab. All Rights Reserved.

            </p>
        </div>

    </footer>
  )
}

export default Footer
