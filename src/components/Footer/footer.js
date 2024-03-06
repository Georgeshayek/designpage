import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer=()=>{

    return(
        <div className="bg-[#00cc99] relative">
            
            <div className="   flex items-center justify-center  ">
            <div className=" absolute  bg-[#003a2c]   mx-[100px] max-lg:mx-[30px] max-lg:p-2 p-6 rounded-xl ">
                <div className="container mx-auto">
                <h1 className='font-bold text-white text-center py-2 '> Register Your CV now! </h1>
                <p className="text-[#aaaaaa] text-center py-2 lg:mx-4 max-lg:text-[10px]">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adi Lorem ipsum dolor sit amet, consectetur adi consectetur adipiscing elit.Nuac  amet, consectetur adipiscing elit.Nuac eros placerat velit faucibus </p>
               <div className="flex justify-center"> <button className="bg-transparent border border-white p-2 rounded-xl text-white">Register</button></div>
          </div></div></div>
          
                    <div className="container mx-auto py-24 px-[68px] ">
                        <div className="grid grid-cols-5 max-lg:grid-cols-2 ">
                            <div className="col-span-2 flex flex-col   max-lg:justify-start lg:justify-center ">
                            <Link href="/"><Image src="/logo.png" alt=" Logo" width={100} height={50}/></Link>
                            <p className="text-white font-serif pr-[100px]  text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam
								ac eros placerat velit faucibus tempor fermentum sit amet urna.</p>
                            </div>
                            <div className=" lg:col-start-3 col-span-1 lg:row-span-2 max-lg:row-start-2  flex flex-col justify-center  text-white py-6">
                                <h2 className="py-2 font-semibold">Company</h2>
                                <p className="font-serif text-[12px]">Address:123 Fifth Avenue,New York - 1080,USA</p>
                                <p className="font-serif text-[12px]">Call Us:+(1600) 456 7890</p>
                                <p className="font-serif text-[12px]">Email:yourid@example.com</p>
                                <p className="font-serif text-[12px]">Mon Sat:9:00AM-19:00PM</p>
                            </div>
                            <div className="text-white col-span-1 lg:row-span-2 max-lg:row-start-2 max-lg:col-start-2 flex flex-col justify-center ml-10">
                                <h2 className="py-2 font-semibold " >Pages</h2>
                               <div className="flex  font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/> <Link href="/">Home</Link></div>
                               <div className="flex font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/><Link href="/">Booking</Link></div>
                               <div className="flex font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/><Link href="/">Facilities</Link></div>
                               <div className="flex font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/><Link href="/">About Us</Link></div>
                               <div className="flex font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/> <Link href="/">Location</Link></div>
                               <div className="flex font-serif text-[12px]"><MdOutlineKeyboardArrowRight className="w-4 h-4"/><Link href="/">Contact</Link></div>
                            </div>
                            <div className=" text-white  col-span-1 row-span-1 max-lg:row-start-3 flex flex-col justify-start ">
                                <h2 className="py-6 font-semibold">About us</h2>
                                <div className="flex items-center justify-start ">
                                    <div className="pr-2">
                                    <IoLogoGoogle className="w-6 h-6"/>
                                    </div>
                                    <div className="px-2">
                                    <FaFacebook className="w-6 h-6"/>
                                    </div>
                                    <div className="px-2">
                                    <FaSquareTwitter className="w-6 h-6"/>
                                    </div>
                                    <div className="px-2">

                                    
                                    <FaLinkedin className="w-6 h-6"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


        </div>
    )
}
export default Footer