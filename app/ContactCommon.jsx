import Link from "next/link";

export default function ContactCommon(){

  return(
    <div className="bg-[#F15A29] py-10 mt-24 text-center">
       <h3 className="text-center text-4xl font-medium mt-16 text-white">Do you Have any Project?</h3>
       <p className="text-center text-white mt-3">We believe in client satisfaction and we deliver projects that can successfully meet or exceed the prospects of the stakeholders.</p>

       <div className="mt-8 text-center mb-16">
       <Link href='/contact' className="px-5 py-2 border rounded  hover:text-[#F15A29] hover:bg-white text-white text-center">Contact Us</Link>
       </div>
    </div>
  )
}