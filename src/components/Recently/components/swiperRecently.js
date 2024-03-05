"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { FaAngular } from "react-icons/fa";
import JobItem from "./jobItem";
import { FaCode } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";

const SwiperRecently = () => {
	const isMaxLg = useMediaQuery({ maxWidth: 1023 });
	const jobs = [
		{
            id:1,
			imageurl: (
				<FaCode className="text-white h-[50px] w-[50px] py-2 " />
			),
            style:"bg-red-600",
			title: "Design and Development",
			company: "Dimension Studio",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
			location: "San francisco,CA",
            type:"Full Time"
		},
		{
            id:2,
			imageurl: (
				<FaAngular className="text-white h-[50px] w-[50px] py-2 " />
			),
			title: "Accounting and Finance",
			company: "Alpander",
            style:"bg-blue-600",

			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
			location: "San Antonio,TX",
            type:"Full Time"
		},
		{
            id:3,
			imageurl: (
				<TbBrandJavascript className="text-white h-[50px] w-[50px] py-2 " />
			),
            style:"bg-green-600",

			title: "Bank instituion",
			company: "XReact Tech",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
			location: "San francisco,CA",
            type:"Full Time"
		},
		{
            id:4,
			imageurl: (
				<FaAngular className="text-white h-[50px] w-[50px] py-2" />
			),
            style:"bg-blue-600",

            title: "Product management",
			company: "XReact Tech",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
			location: "San francisco,CA",
            type:"Full Time"
		},
	];

	return (
		<Swiper
			spaceBetween={isMaxLg ?10:50}
			slidesPerView={isMaxLg ? 2 : 3}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{jobs.map((mov,i) => (
				<SwiperSlide key={i}>
					<JobItem
                        id={mov.id}
						imageurl={mov.imageurl}
						style={mov.style}
                        title={mov.title}
                        company={mov.company}
                        paragraph={mov.paragraph}
						location={mov.location}
                        type={mov.type}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default SwiperRecently;
