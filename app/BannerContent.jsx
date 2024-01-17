import Link from 'next/link'
import React from 'react'

export default function BannerContent() {
    return (
        <div className=' p-5'>
            <h1 className='md:text-5xl text-3xl  text-white'>We Are Professionals
            <br />
            @ Our Service</h1>

            <p className='text-white mt-3 text-xl'>Expert Software Company: <br />
            Business Collaborations For Excellent Software Solutions</p>

            <div className='mt-5 flex flex-wrap  gap-3 '>
                <Link className='border border-white px-6 py-2 rounded text-white hover:text-white hover:bg-[#F15A29] hover:border-[#F15A29]' href='/'>Services</Link>
                <Link className='border border-white px-6 py-2 rounded text-white hover:text-white hover:bg-[#F15A29] hover:border-[#F15A29]' href='/'>Store</Link>
                <Link className='border border-white px-6 py-2 rounded text-white hover:text-white hover:bg-[#F15A29] hover:border-[#F15A29]' href='/'>Hire Us</Link>
                <Link className='border border-white px-6 py-2 rounded text-white hover:text-white hover:bg-[#F15A29] hover:border-[#F15A29]' href='/'>Blog</Link>
            </div>
        </div>
    )
}
