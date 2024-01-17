"use client"
import React from 'react'
import Image from 'next/image'
import belgium from '../public/img/belgium.svg'
import vietnam from '../public/img/vietnam.svg'
import portugal from '../public/img/portugal.svg'
import whatsapp from '../public/img/whatsapp2.png'
import bangladesh from '../public/img/bangladesh.svg'
import logo from '../public/img/rafusoft-logo.svg'
import { useState } from 'react'
import Link from 'next/link'


export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [about , setAbout] = useState(false);

  return (
    <nav >
    <div className="bg-[#27272893] p-4 hidden md:block">
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <ul className='flex gap-5'>
          <a href="" className='text-white'><i className="fa-brands scale-90 fa-facebook"></i></a>
          <a href="" className='text-white'><i className="fa-brands scale-90 fa-x-twitter"></i></a>
          <a href="" className='text-white'><i className="fa-brands scale-90 fa-instagram"></i></a>
          <a href="" className='text-white'><i className="fa-brands scale-90 fa-youtube"></i></a>
          <a href="" className='text-white'><i className="fa-brands scale-90 fa-linkedin-in"></i></a>
        </ul>
        <div className='flex items-center gap-5'>
          <a href="mailto:info@rafusofty.com" className='text-white hover:text-[#F15A29] text-[13px]' ><i class="fa-solid fa-envelope scale-95  text-[#F15A29]"></i> info@rafusoft.com</a>
          <a href="" className='text-white text-[13px] flex  items-center gap-2 hover:text-[#F15A29]'><Image className='w-5' src={belgium} alt="Belgium" /> <p className='pl-2'>+32498464176</p></a>
          <a href="" className='text-white text-[13px] flex  items-center gap-2 hover:text-[#F15A29]'><Image className='w-5' src={vietnam} alt="Belgium" /> <p className='pl-2'>+84385402004</p></a>
          <a href="" className='text-white text-[13px] flex  items-center gap-2 hover:text-[#F15A29]'><Image className='w-5' src={portugal} alt="Belgium" /> <p className='pl-2'>+351920330982</p></a>
          <a href="" className='text-white text-[13px] flex  items-center gap-2 hover:text-[#F15A29]'><Image className='h-4 w-4' src={whatsapp} alt="Belgium" /> <p className='pl-2'>+8801712552009</p></a>
          <div className='relative'>
            <div href="" className='text-white text-[13px] flex  items-center gap-5]'>
              <a href="" className='text-white text-[13px] hover:text-[#F15A29] flex  items-center gap-5]'><Image className='w-5' src={bangladesh} alt="Belgium" /> <p className='hover:text-[#F15A29] pl-2'> +8801744333888</p></a>
              <button onClick={() => setOpen(!open)}> <i class="fa-solid fa-angle-down text-white cursor-pointer mx-2"></i></button>
            </div>
            <a href="" className={`${open ? "text-white text-[13px] flex  rounded-sm items-center absolute top-5 " : "hidden"}`}><Image className='w-5' src={bangladesh} alt="Belgium" /> <p className='pl-2'> +8801744333888</p></a>
          </div>
        </div>
      </div>
    </div>
    <main className='px-5 py-5 bg-[#27272800]'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
       <Link href='/'> <Image src={logo} alt="rafusoft logo" /></Link>
        <div className='md:flex  gap-5 hidden '>

          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'> About Us <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#ffffff] w-72'>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full px-5 block' href='/'>Our Team</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full px-5 block' href='/'>Apply For Job</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full px-5 block' href='/'>IT Solution Dinajpur</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full px-5 block' href='/'>CSR</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full px-5 block' href='/'>Contact Us</Link>
            </ul>
          </div>

          

          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'> Services <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Mobile App Development</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Software Develpment</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Web Development</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Graphic Design</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Offshore Development Center</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Web Hosting</Link>
            </ul>
          </div>



          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'>Companies <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Rafusoft</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Raipur Auto Rice Mills</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Rafusoft Golden Fish</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Raipur Block & Bricks</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Trust News 24</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Raipur Murir Mill</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Gram Bangla Murir Mill</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Raipur Travels</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Kenakata Dinajpur (KD)</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Real Trading</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Kokoro Sushi</Link>
            </ul>
          </div>





          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'>Resources <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Gallery</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Get Quote</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Download Form</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Knowledge Center</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Dinajpur Job Vacancy</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Cobra Antivirus</Link>
            </ul>
          </div>






          
          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'>Others <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Network Billing Pay</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Technology</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Go Green</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Dir</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Partners </Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Partners </Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Insights & Research</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Illegal</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>OTHERS </Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>FAQ</Link>
            </ul>
          </div>






          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'>Products <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Cobra Antivirus SDK</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Process Parameter</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>OEE Performance Monitoring</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Rafusoft Integration</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Manufacturing Intelligence</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Maintenance</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Dispatching Manager</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Traceability</Link>
            </ul>
          </div>



          <div className='relative  li py-5'>
            <Link className='text-white text-[15px] hover:text-[#F15A29]' href='/'>Apps <i class="fa-solid fa-chevron-down scale-75"></i></Link>
            <ul className='absolute mt-3 bg-[#fcfcff] w-72'>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Qr Code Generator</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Sales and Inventory System (POS)</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>RafuTV App</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>GoWeb Website Builder</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Rafusoft Invoice</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Bulk SMS Panel</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Task Management App</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Quality Assurance App</Link>
              <Link className='text-black text-[15px] py-2   hover:text-[#F15A29] w-full px-5 block' href='/'>Job Scheduling App</Link>
            </ul>
          </div>



        </div>
        <Link href='/' className='px-5 py-2 text-white rounded bg-[#F15A29] hidden md:block text-[15px]'>Get Quote</Link>
        <button className='md:hidden block'><i class="fa-solid fa-bars text-white"></i></button>
      </div>
    </main>
    <div className='max-w-6xl mx-auto border-t border-[#3d3c3e]'>
    </div>


    <div className='hidden'>
    <div className='bg-white p-5'>
            <Link className='flex justify-between items-center hover:text-[#F15A29]'  href='/' onClick={()=>setAbout(!about)}> <p>About Us</p> <i class="fa-solid fa-plus"></i></Link>
            <div className={`${about ? 'rotate-0' : 'hidden rotate-3'}  menu-small`}>
            <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full  block' href='/'>Our Team</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full block' href='/'>Apply For Job</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full  block' href='/'>IT Solution Dinajpur</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full  block' href='/'>CSR</Link>
              <Link className='text-black text-[15px] py-2 hover:text-[#F15A29] w-full block' href='/'>Contact Us</Link>
            </div>
    </div>
    </div>

  </nav>
  )
}
