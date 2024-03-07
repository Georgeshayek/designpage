"use client"
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { usePathname } from 'next/navigation'
const Navbar=()=>{
    const path=usePathname();
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };

    return(
        <nav className=" max-lg:bg-[#f1f1f1]" >
        <div className="flex max-lg:justify-end lg:justify-between items-center relative max-lg:px-2 lg:py-4 ">
            <div className="max-lg:mx-auto" >
                <Link href="/" ><Image src="/logo.png"  alt=" Logo" width={100} height={50}/></Link>
            </div>
            <button id="burger-btn" className="  block text-white p-1 bg-[#00cc99] lg:hidden " onClick={toggleShow}>&#9776;</button>
            <ul className={`flex justify-center  max-lg:flex-col ${!show ? 'max-lg:hidden' : 'max-lg:block'} max-lg:absolute max-lg:top-[100px] max-lg:left-0 max-lg:bg-[#f1f1f1] max-lg:p-1 max-lg:w-[100%]  max-lg:z-50`}>                
            <li className="max-lg:text-center max-lg:p-1 lg:inline-block lg:mr-[10px]"><Link className={`py-10 px-[10px]  hover:text-[#00cc99] text-[16px] font-semibold ${path==="/"?"text-[#00cc99] font-semibold":""}`} href="/">Home</Link></li>
            <li className=" max-lg:text-center max-lg:p-1 lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px]  hover:text-[#00cc99] text-[16px] font-semibold  ${path==="/about"?"text-[#00cc99] font-semibold":""}`} href="/about">About</Link></li>
            <li className="max-lg:text-center max-lg:p-1 lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px]  hover:text-[#00cc99] text-[16px] font-semibold ${path==="/contact"?"text-[#00cc99] font-semibold":""}`} href="/contact">Contact</Link></li>
            <li className="max-lg:text-center max-lg:p-1 lg:inline-block lg:mr-[10px]"><Link className={`py-5 px-[10px]  hover:text-[#00cc99] text-[16px] font-semibold ${path==="/contact"?"text-[#00cc99] font-semibold":""}`} href="/contact">Contact</Link></li>

        </ul>
        
    </div>

    </nav>
    )
}
export default Navbar