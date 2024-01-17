import Navbar from "../Navbar";
import SoftwareService from '../../public/img/Software-Service.jpg'
import Image from "next/image";
import Link from "next/link";
import ContactCommon from "../ContactCommon";

export const metadata = {
  "title": "Rafusoft - Software Company Company"
}

export default function Home() {
  return (
      <div>
        <div className="bradcamp-keyboard pb-20">
          <Navbar/>
          <h2 className="text-center text-white  mt-32 text-5xl uppercase">What</h2>
          <h1 className="text-white mt-10 text-4xl text-center">OUR SOFTWARE DEVELOPMENT SERVICE</h1>
          <h3 className="text-center mt-5 text-white text-xl">TOP SOFTWARE FIRMS IN BANGLADESH</h3>
          <h4 className="text-center text-4xl mt-5 text-[#F15A29]">RAFUSOFT - SOFTWARE DEVELOPMENT</h4>
          
          <div className="text-center mt-20">
            <a href="#content" className="bg-[#F15A29] hover:text-white text-white font-bold rounded border-2 border-white px-4 py-2"><i class="fa fa-arrow-down scale-150 animate-bounce"></i></a>
          </div>
        </div>

        <div id="content" className="pt-20 max-w-6xl mx-auto px-5">
          <div  className="md:flex justify-between gap-10">
            <Image className="md:w-1/2" src={SoftwareService} alt="SoftwareService" />
            <div className="md:w-1/2 text-slate-600 mt-5">
              <h3 className="font-bold text-[#F15A29]">Our Software Development Service</h3>
              <p className="mt-5">Rafusoft has been providing software development outsourcing services to both start-up companies and global corporations around the world. We focus on custom-fit, flexible solution and your time requirements. We are <Link className="text-[#F15A29] font-medium" href='/top-most-software-company-in-bangladesh'>high-ranking software development outsourcing company in Bangladesh</Link>, we also have an office in Australia.</p>
              <h3 className="font-bold text-[#F15A29] mt-4">Our Strength</h3>
              <p>Rafusoft’s top strength is the ability to <span className="font-medium text-black">provide professional services quickly</span> with <span className="font-medium text-black">very competitive cost</span>. We achieve this by the advantage of Bangladesh labor market and capability of the management team, which includes senior developers with over 10-year experience from Australia and Bangladesh.</p>
            </div>
          </div>

          <h3 className="font-bold text-[#F15A29] mt-10">Your Benefits</h3>
          <p className="mt-5 text-slate-600">Working with us may give you numerous advantages. Outsourcing programming improvement to us upgrades you to begin your activities quickly. In the event that you develop an improvement group, your engineers need to get known to each other, take in every others' qualities, consider how to supplement each other, and it requires some investment. While outsourcing your undertaking to us, you will prepare a group to work with maximum capacity ability.</p>
          <p className="mt-5 text-slate-600">Moreover, the trust is there is a lack of developers on the market. In order to build a better developer team, you have to go through a process in terms of reach developers, interview them, and confirm their skills. Else, you should consider external assistance when you don’t aware of programing. The recruitment process has its own risk. You must have professional skills to hire staff that would save your time and money.</p>
          <p className="mt-5 text-slate-600">Here we offer the right tools and technologies for your projects. You won’t need to bother about the right tools or technologiesand don’t need to know how to make it. All you just need to hire a professional team.<Link href="/top-most-software-company-in-bangladesh" className="text-[#F15A29] font-medium"> Software development companies</Link> have experience workingon many projects and they are aware of the recent tech trends to help you choose the right solutions.</p>
          <p className="mt-5 text-slate-600">Last but not least, To wrap things up, Outsourcing Software Development to Bangladesh gives you the best item with genuinely minimal effort, If you pick us, you can make certain of a high caliber of your item. We utilize mechanized CI/CD, quality confirmation procedures, and improvement apparatuses, and we do it from the very beginning when chipping away at your task. It constructs your product speedier and better.</p>
          <p className="mt-5 text-slate-600">To put it plainly, as you probably are aware, Our outsourcing programming advancement administration will give you best administration without the additional charge. This is a frequently case in new companies: you require 5 individuals to manufacture MVP, at that point one to help enormous fixes when we confirm your MVP available, at that point 5 again to rotate, at that point two for hot-fixes and little enhancements, at that point 20 to give it a chance to scale. This implies you have to secure assets to help group of 5 continually and develop it to 20 preceding you scale not to lose time. When working with us an outsourcing organization, it won't be an issue to change your requests alongside your evolving needs.</p>
          <p className="mt-5 text-slate-600">Do you wish to design a top-notch software for your organization? Not sure where exactly you should go to? Well, we are the one for you. We are a software development company in Bangladesh that have been offering custom made software solutions to our customers for quite a while now. We are a very popular name in Bangladesh Software industries and we have helped hundreds of organizations to achieve their business goals.</p>
          <p className="mt-5 text-slate-600">We design different software solutions for our customers using which you will be able to automate various business processes and make things easier for the employees of your organization. Being the best Best software Company Bangladesh, our software solutions are completely worth the money spent on them. They are specifically designed to meet all the requirements of your company. By being in touch with our software company in Bangladesh, you will be able to add value to your company and offer the best services to your customers.</p>
        </div>

        <ContactCommon/>
      </div>
  );
}
