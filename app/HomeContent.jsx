import React from 'react'
import PatnerContent from './PatnerContent'
import HandshakeIcon from '@mui/icons-material/Handshake';
import Patner from './Pater'
import ContactCommon from './ContactCommon'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeContent() {
  return (
    <div>
        <div className='max-w-6xl mx-auto md:flex justify-between items-center mb-10 p-5'>
           <div className='md:w-1/2'>
           <h2 className='text-2xl md:text-3xl font-medium'>RAFUSOFT | SOFTWARE COMPANY IN BANGLADESH</h2>
            <p className='mt-4  text-[#212529]'>We are the leading software development company in Bangladesh , we have a representative office in USA and India. To be the top <Link className='text-[#F15A29]' href="/rafusoft-software-development-company">Bangladesh software company</Link> that provides agile software development service, we focus on our both quality and cost.</p>

            <p className='mt-4  text-[#212529]'>Located in Dinajpur City, our excellent product outsourcing company provides superior full-stack development as well as offshore development center (ODC) services to meet the demand of various associations and organizations. We cover Bangladesh, Belgium, India, Portugal and Vietnam.</p>
            <p className='mt-4  text-[#212529]'>We specialize in:</p>

            <div>
                <h5 className='my-4 font-medium'>➔ Mobile app development</h5>
                <h5 className='my-4 font-medium'>➔ Developing Native iOS Android</h5>
                <h5 className='my-4 font-medium'>➔ Mobile hybrid apps and web apps</h5>
                <h5 className='my-4 font-medium'>➔ Web app development</h5>
                <h5 className='my-4 font-medium'>➔ Full lifecycle programming environment and the full-stack advancement utilizing the most recent innovation</h5>
            </div>

            <p className='mt-5 text-[#212529]'>We not only focus on the quality and cost of our service but also advise the best solutions to meet customer&apos;s specific markets. Our incessant effort, improvement, and innovative ideas made our expert team the trusted software offshore center provider amongst our esteemed clients.</p>

            <div className='flex items-start gap-5 mt-5'>
                <Image  src="/img/icon1.png" width={50} height={50} alt='icon 1 '></Image>
                <div>
                    <h3>Our Mission</h3>
                    <p>Realize all the ideas of customers using the latest technology, thereby helping them save time and costs, increase productivity to the highest level. We want to give customer the best outsourcing software development services.</p>
                </div>
            </div>
            <div className='flex items-start gap-5 mt-5'>
            <Image  src="/img/icon2.png" width={50} height={50} alt='icon 1 '></Image>
                <div>
                    <h3>Our Vision</h3>
                    <p>To be on top 10 software development companies in Asia in 2020. Providing excellent outsourcing software development services and perfect mobile apps development and web development.</p>
                </div>
            </div>
            <div className='flex items-start gap-5 mt-5'>
            <Image src="/img/icon3.png" width={50} height={50} alt='icon 1 '></Image>
                <div>
                    <h3>Our Core Values</h3>
                    <p>Honesty - Excellence - Experience - Cost efficiency - Support.</p>
                </div>
            </div>
           </div>
          <Image className='md:block hidden' src="/img/rocket.png" width={500} height={500} alt='rocket project rafusoft'></Image>
        </div>

        {/* ******************************************************************************************** */}


        <div>
            <div className='max-w-6xl mx-auto p-5'>
            <h3 className='text-center text-3xl font-semibold'>Top IT Services for Quality Work!</h3>
            <p className='text-center text-[16px] mt-5'>We provide outsourcing software development service and offshore software development center to customers. We develop innovative mobile apps and web apps to make complex things to become simple.</p>
            </div>

            <section className='max-w-6xl mx-auto py-10 grid md:grid-cols-3 grid-cols-1 gap-10 p-5'>
                <div>
                    <div className='mobile-app relative'>
                        <Image src="/img/1.png" width={500} height={500} className='h-[300px]' alt="Mobile App Development" />
                        <div className='absolute w-full h-full top-0 bg-[#000000ba] flex justify-center items-center '>
                            <div className='text-center'>
                            <Image className='mx-auto' src="/img/mobile-app-icon.png" height={50} width={50} alt='Mobile App Development'></Image>
                                <h2 className='uppercase  text-white font-bold mt-4'>Mobile App Development</h2>
                            </div>
                        </div>
                        <div className='absolute mobile-app-child w-full h-full top-0 p-4  bg-[#F15A29]'>
                            <h2 className='uppercase  text-white font-bold mt-4'>MOBILE APP DEVELOPMENT</h2>
                            <hr className='my-2' />
                            <p className='text-sm text-white'>We simplify complicated things by designing the best mobile apps products and delivering the most
							innovative mobile apps and web apps to our valued customers. We have an expert team of the most
							senior developers with accumulated experience of over 5 years in iOS and Android applications. They
							ensure the innovative technology included in the producing products.</p>
                        </div>
                    </div>
                    <div className='mobile-app relative mt-8'>
                        <Image src="/img/2.png" width={500} height={500} className='h-[300px]' alt="Mobile App Development" />
                        <div className='absolute w-full h-full top-0 bg-[#000000ba] flex justify-center items-center '>
                            <div className='text-center'>
                            <Image className='mx-auto' src="/img/web-dev-icon.png" height={50} width={50} alt='Mobile App Development'></Image>
                                <h2 className='uppercase  text-white font-bold mt-4'>Web Development</h2>
                            </div>
                        </div>
                        <div className='absolute mobile-app-child w-full h-full top-0 p-4  bg-[#F15A29]'>
                            <h2 className='uppercase  text-white font-bold mt-4'>Web Development</h2>
                            <hr className='my-2' />
                            <p className='text-sm text-white'>We offer fully functional and extremely practical web applications as per the industry standard and our services are fully customized that meet your business needs, objectives, and specifications.</p>
                        </div>
                    </div>
                    
                </div>
                <Image src="/img/Company-Service-Features.jpg" height={600} width={350} alt='Service and feature img'></Image>
                <div>
                    <div className='mobile-app relative'>
                        <Image src="/img/3.png" className='h-[300px]' height={500} width={50} alt="Mobile App Development" />
                        <div className='absolute w-full h-full top-0 bg-[#000000ba] flex justify-center items-center '>
                            <div className='text-center'>
                            <Image className='mx-auto ' src="/img/graphics-design-icon.png" width={50} height={50} alt='Mobile App Development'></Image>
                                <h2 className='uppercase  text-white font-bold mt-4'>Graphic Design</h2>
                            </div>
                        </div>
                        <div className='absolute mobile-app-child w-full h-full top-0 p-4  bg-[#F15A29]'>
                            <h2 className='uppercase  text-white font-bold mt-4'>Graphic Design</h2>
                            <hr className='my-2' />
                            <p className='text-sm text-white'>As part of your design package, we accumulate visual and verbal brand communications guidelines. These guidelines are the major tactical statements that aid in dealing with brand strategically by all stakeholders. </p>
                        </div>
                    </div>
                    <div className='mobile-app relative mt-8'>
                        <Image src="/img/2.png" height={400} width={500} className='h-[300px]' alt="Mobile App Development" />
                        <div className='absolute w-full h-full top-0 bg-[#000000ba] flex justify-center items-center '>
                            <div className='text-center'>
                            <Image className='mx-auto' src="/img/offshore-icon.png" height={50} width={50} alt='Mobile App Development'></Image>
                                <h2 className='uppercase  text-white font-bold mt-4'>Offshore Development</h2>
                            </div>
                        </div>
                        <div className='absolute mobile-app-child w-full h-full top-0 p-4  bg-[#F15A29]'>
                            <h2 className='uppercase  text-white font-bold mt-4'>Offshore Development</h2>
                            <hr className='my-2' />
                            <p className='text-sm text-white'>Rafusoft has a proven track record of lead offshore development service, providing excellent
										offshore center, delivering effective software solutions to organizations worldwide. We’re a team of
										highly experienced and qualified software developers in Bangladesh that works in accordance with
										standardized methods and procedures.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>


        <PatnerContent></PatnerContent>

        {/* our proccess  */}

        <section className='py-20 bg-process'>
            <h3 className='text-center text-3xl font-semibold text-white'>OUR PROCESS</h3>
            <p className='text-center text-white font-medium md:w-1/2 mx-auto'>Check out the outline here that will define how we typically approach each new project in software development, including mobile apps development, and web development</p>


            <div className='max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 p-5' >
                <div className='p-10 border-mini rounded'>
                    <div className='flex justify-center py-5'>
                        <Image src="/img/GATHER-SPECS-icon.png" width={50} height={50} alt='/img/GATHER-SPECS-icon.png'></Image>
                    </div>
                    <div>
                        <h4 className='text-white font-medium text-xl'>GATHER SPECS</h4>
                        <p className='my-3 text-white'>➔ Clarify requirements</p>
                        <p className='my-3 text-white'>➔ Confirm requirements</p>
                        <p className='my-3 text-white'>➔ List features base on priority</p>
                        <p className='my-3 text-white'>➔ Create stories on JIRA</p>
                    </div>
                </div>
                <div className='p-10 border-mini rounded'>
                    <div className='flex justify-center py-5'>
                    <Image src="/img/GATHER-SPECS-icon.png" width={50} height={50} alt='/img/GATHER-SPECS-icon.png'></Image>
                    </div>
                    <div>
                        <h4 className='text-white font-medium text-xl'>GATHER SPECS</h4>
                        <p className='my-3 text-white'>➔ Clarify requirements</p>
                        <p className='my-3 text-white'>➔ Confirm requirements</p>
                        <p className='my-3 text-white'>➔ List features base on priority</p>
                        <p className='my-3 text-white'>➔ Create stories on JIRA</p>
                    </div>
                </div>
                <div className='p-10 border-mini  rounded'>
                    <div className='flex justify-center py-5'>
                    <Image src="/img/GATHER-SPECS-icon.png" width={50} height={50} alt='/img/GATHER-SPECS-icon.png'></Image>
                    </div>
                    <div>
                        <h4 className='text-white font-medium text-xl'>GATHER SPECS</h4>
                        <p className='my-3 text-white'>➔ Clarify requirements</p>
                        <p className='my-3 text-white'>➔ Confirm requirements</p>
                        <p className='my-3 text-white'>➔ List features base on priority</p>
                        <p className='my-3 text-white'>➔ Create stories on JIRA</p>
                    </div>
                </div>
            </div>
        </section>



        {/* BEST STATS & CASE STUDIES */}




        <section className='my-28'>
            <h2 className='text-center font-medium text-3xl '>BEST STATS & CASE STUDIES</h2>
            <h2 className='text-center mt-4 font-medium'>Here&apos;s our valuable customers trusted us.</h2>


            <div className='max-w-6xl mx-auto grid md:grid-cols-4 gap-10 grid-cols-1 mt-16'>
                <div className='flex items-center gap-5'>
                    <Image src="/img/stats/counter-1.png" height={50} width={50} alt="Count 1" />
                    <div>
                        <h5 className='text-4xl font-medium'>150 +</h5>
                        <p className='text-xl '>Web Development</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                <Image src="/img/stats/counter-2.png" height={50} width={50} alt="Count 1" />
                    <div>
                        <h5 className='text-4xl font-medium'>50 +</h5>
                        <p className='text-xl '> App Development</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                <Image src="/img/stats/counter-3.png" height={50} width={50} alt="Count 1" />
                    <div>
                        <h5 className='text-4xl font-medium'>100 +</h5>
                        <p className='text-xl '>Customers</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                <Image src="/img/stats/counter-4.png" height={50} width={50} alt="Count 1" />
                    <div>
                        <h5 className='text-4xl font-medium'>100 %</h5>
                        <p className='text-xl '>Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='quote-bg py-20 mt-20'>
            <h3  className='text-5xl font-bold text-white text-center mx-auto leading-8'><i className="fa-solid fa-quote-left scale-150  text-[#FF9800]"></i> We Believe : Technology Brings Transformative <br /> <br /> Changes to Business  <i className="fa-solid fa-quote-right scale-150  text-[#FF9800]"></i></h3>

            <div className='max-w-6xl mx-auto mt-10 grid md:grid-cols-4 grid-cols-1 gap-5 '>
                <div className='bg-[#444444] p-10 text-center'>
                <HandshakeIcon className="text-white font-bold" ></HandshakeIcon>
                <div className='text-center shadow-xl py-3 text-xl text-white font-medium mt-4'>
                    27 +
                </div>
                    <p className='text-xl text-white mt-4'>Years of Trust</p>
                </div>
                <div className='bg-[#444444] p-10 text-center'>
                <i className="fa fa-tasks scale-[3] font-extrabold text-white " ></i>
                <div className='text-center shadow-xl py-3 text-xl text-white font-medium mt-4'>
                    950 +
                </div>
                    <p className='text-xl text-white mt-4'>Projects</p>
                </div>
                <div className='bg-[#444444] p-10 text-center'>
                <i className="fa fa-user-o scale-[3] font-extrabold text-white " ></i>
                <div className='text-center shadow-xl py-3 text-xl text-white font-medium mt-4'>
                    3.5k +
                </div>
                    <p className='text-xl text-white mt-4'>Subscriber</p>
                </div>
                <div className='bg-[#444444] p-10 text-center'>
                <i className="fa fa-smile-o scale-[3] font-extrabold text-white " ></i>
                <div className='text-center shadow-xl py-3 text-xl text-white font-medium mt-4'>
                   300 +
                </div>
                    <p className='text-xl text-white mt-4'>Happy Clients</p>
                </div>
            </div>
        </section>


        {/* Concept */}
        <div className='mt-20'>
            <h3 className='text-center text-4xl font-medium mt-5'>From Idea to Proof of Concept</h3>
            <p className='mt-3 text-center text-xl'>It takes more than a team to realise a game changing idea, it&apos;s domain expertise and that&apos;s what we possess.</p>

            <div className='flex justify-center mt-16'>
            <Image src="/img/stats/ideation.png" width={1000} height={800} alt="ideation" />
            </div>
        </div>

        {/* reference  */}

        <Patner/>
        <ContactCommon/>
    </div>
  )
}













