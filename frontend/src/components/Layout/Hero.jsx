import React from 'react'
import heroImg from "../../assets/Kick2.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg} alt="Kicks" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
        <div className='absolute inset-0 bg-black flex items-center justify-center bg-opacity-10'>
            <div className="text-center text-white p-6">
                <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 '>New Balance <br />990</h1> 
                <p className='text-sm tracking-tighter md:text-lg mb-6'> Explore our newest collection</p>
                <Link to="#" className="bg-black bg-opacity-15 text-white px-6 py-2 rounded-full text-xl hover:bg-opacity-50  " >
                Shop Now
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
