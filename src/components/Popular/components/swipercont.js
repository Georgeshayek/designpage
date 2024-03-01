"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "react-responsive";
// Import Swiper styles
import 'swiper/css';
import SwiperItem from './swiperItem';

const SwiperCont=()=>{
    const isMaxLg = useMediaQuery({ maxWidth: 1023 });
    const images = [
		{ imageurl: "/brain.svg", title: "Design and Development", vacancy:350 },
		{ imageurl: "/stats.svg", title: "Accounting and Finance", vacancy:300 },
		{ imageurl: "/bank.svg", title: "Bank instituion", vacancy:250 },
		{ imageurl: "/clipboard.svg", title: "Product management", vacancy:200 },
		{ imageurl: "/pdf.svg", title: "Bank instituion", vacancy:350 },
		{ imageurl: "/brain.svg", title: "Bank instituion", vacancy:150 },
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