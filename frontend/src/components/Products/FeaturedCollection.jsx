import React from 'react'
import { Link } from 'react-router-dom'
import featured from "../../assets/kick1.jpg" 

const FeaturedCollection = () => {
  return <section className='py-16 px-4 lg:px-0'>
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and style 
        </h2>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
        </h2>
        <p className='text-lg text-gray-600 mb-6'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis assumenda tempora sunt
            pariatur repellendus commodi enim molestiae optio modi doloremque maiores adipisci, eligendi obcaecati nostrum ut
            laborum ex dignissimos.
        </p>
        <Link to="/collections/all"  className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
        Shop Now
        </Link>
        </div>
        {/* Right content */}
        <div className="lg:w-1/2">
        <img src={featured} alt="featured collection"
        className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' />
        </div>
    </div>
  </section>
}

export default FeaturedCollection
