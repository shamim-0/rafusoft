import Image from 'next/image'
import rafusoftreview from '../public/img/stats/rafusoft-review.svg'
import Link from 'next/link'

export default function Footer(){
  return(
    <div className="bg-[#1F1F1F] pt-10 pb-3 px-5">
        <div className="text-center flex justify-center items-center gap-4">
          <a className="bg-[#7e7a7a]  h-10 w-10 flex justify-center items-center rounded-full p-2" href="https://www.facebook.com/rafusoft"><i class="fa-brands fa-facebook-f text-white scale-100  rounded-full"></i></a>
          <a className="bg-[#7e7a7a]  h-10 w-10 flex justify-center items-center rounded-full p-2" href="https://twitter.com/rafusoft"><i class="fa-brands fa-x-twitter text-white scale-100  rounded-full"></i></a>
          <a className="bg-[#7e7a7a]  h-10 w-10 flex justify-center items-center rounded-full p-2" href="https://www.instagram.com/rafusoft"><i class="fa-brands fa-instagram text-white scale-100  rounded-full"></i></a>
          <a className="bg-[#7e7a7a]  h-10 w-10 flex justify-center items-center rounded-full p-2" href="https://www.youtube.com/rafusoft"><i class="fa-brands fa-youtube text-white scale-100  rounded-full"></i></a>
          <a className="bg-[#7e7a7a]  h-10 w-10 flex justify-center items-center rounded-full p-2" href="https://www.linkedin.com/in/rafusoft/"><i class="fa-brands fa-linkedin-in text-white scale-100  rounded-full"></i></a>
        </div>

        <p className="text-center my-4 text-white ">Top Most Software Company in Bangladesh</p>
        <p className="text-center my-4 text-white ">সফটয়্যার কমপনি বাংলাদেশ</p>
        <div className='flex justify-center '>
         <a href="https://g.page/r/CV46CyoD9xEVEB0/review"><Image src={rafusoftreview} alt="" /></a>
        </div>

        <div class="facebook-like-button text-center mb-2 flex justify-center mt-10">
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frafusoft&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId=951450788914496" width="174" height="30"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>

        <div className='flex justify-center text-sm gap-2 mt-5'>
        <Link href='/' className='text-[#F15A29] hover:text-white'>Privacy Policy</Link>
        <p className='text-white'>|</p>
        <Link href='/' className='text-[#F15A29] hover:text-white'>Terms & Conditions</Link>
        <p className='text-white'>|</p>
        <Link href='/' className='text-[#F15A29] hover:text-white'>Refund Policy</Link>
        <p className='text-white'>|</p>
        <p className='text-white hover:text-white'>© 2024 Rafusoft.com | Trade License: 525</p>
        <p className='text-white'>|</p>
        <a href='https://basis.org.bd/company-profile/18-12-992' className='text-[#F15A29] hover:text-white'>Basis License: G992</a>
        </div>


    </div>
  )
}