"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "react-responsive";
import { AiFillBank } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { FaClockRotateLeft } from "react-icons/fa6";


// Import Swiper styles
import 'swiper/css';
import SwiperItem from './swiperItem';

const SwiperCont=()=>{
    const isMaxLg = useMediaQuery({ maxWidth: 1023 });
    const images = [
		{ imageurl: <LuBrain  className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Design and Development", vacancy:350 },
		{ imageurl: <ImStatsBars className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Accounting and Finance", vacancy:300 },
		{ imageurl: <AiFillBank className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Bank instituion", vacancy:250 },
		{ imageurl: <FaClockRotateLeft className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Product management", vacancy:200 },
		{ imageurl: <LuBrain className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Bank instituion", vacancy:350 },
		{ imageurl: <AiFillBank className="text-[#00cc99] h-[50px] w-[50px] py-2 max-lg:ml-1 group-hover:text-white" /> , title: "Bank instituion", vacancy:150 },
	];

    return(
        <Swiper
      spaceBetween={50}
      slidesPerView={isMaxLg?3:4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
        {images.map(mov=> <SwiperSlide><SwiperItem imageurl={mov.imageurl} title={mov.title} vacancy={mov.vacancy}/></SwiperSlide>)}
      
    </Swiper>
    )

}
export default SwiperCont