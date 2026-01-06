import React from 'react'
import kick3 from "../../assets/Kick3.jpg"
import kick4 from "../../assets/Kick4.jpg"
import kick8 from "../../assets/Kick8.jpg"
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/* Womens Collection */}
            <div className="relative flex-1">
                <img src={kick4} alt="Womens Collections" className='w-full h-[700px] object-cover rounded-l-2xl' />
                <div className="absolute bottom-8 p-4">
                    <h2 className='text-7xl font-bold text-white mr-28 mb-3'>Womens Collection</h2>
                    <Link to="/collections/all?gender=Women" className="text-white underline" >
                    Shop Now
                    </Link>
                </div>
            </div>
            {/* Mens Collections */}
            <div className="relative flex-1">
                <img src={kick3} alt="Mens Collections" className='w-full h-[700px] object-cover rounded-r-2xl ' />
                <div className="absolute bottom-8 p-4">
                    <h2 className='text-7xl font-bold text-white mr-40 mb-3'>Mens Collection</h2>
                    <Link to="/collections/all?gender=Men" className="text-white underline " >
                    Shop Now
                    </Link>
                </div>
            </div>

        </div>

    </section>
  )
}

export default GenderCollectionSection
