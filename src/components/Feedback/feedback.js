"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Feedback = () => {
	const arr = [
		{
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  tempe magna aliquaor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			author: "Georges El Hayek",
			job: "Full stack developer intern at Creoshift",
			img: "/dummysquare.png",
		},
		{
			paragraph:
				"Lorem ipsum dolsador sit amet, consecte magna aliquaetur adipiscing elit, sed do  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			author: "Elie El Khoury",
			job: "Software developer intern at Amazon",
			img: "/dummygray.png",
		},
		{
			paragraph:
				"Lorem  black red green ipsum dolsador sit, ut labore et dolore magna aliqua. Ut enim ad minim veniam, q amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			author: "Maria Khalil",
			job: "Senior Front-end developer at Creoshift",
			img: "/dummysquare.png",
		},
		{
			paragraph:
				"Lorem blue pink yellow ipsum dolsadorabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat, ut labore et dolore magna aliqua. Ut enim ad minim veniam, qion ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			author: "Elia El Khoury",
			job: "CyberSecurity Engineer at Coordinates",
			img: "/dummygray.png",
		},
	];
   
    const [indx,setIndx]=useState(0);

	//const [indx, setIndx] = useState(0);
	
    const onIndxChangeNext = () => {
        setTimeout(() => {
            setIndx(prev=>prev+1);
        }, 1500);
      };
      const onIndxChangePrev = () => {
        setTimeout(() => {
            setIndx(prev=>prev-1);
        }, 2000);
      };
	return (
		<>
				<div className=" grid grid-cols-2 max-lg:grid-cols-1  py-4">
					<div className="col-span-1 max-lg:text-center">
						<div>
							<h1 className=" font-bold text-[30px] max-lg:text-[20px] ">
								People's Feedback about JobNow!
							</h1>
							<p className="text-[#8a8a8a] py-4 max-lg:text[6px] ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam
								ac eros placerat velit faucibus tempor fermentum sit amet urna.
							</p>
						</div>
						<div className="py-4">
							<p className="font-semibold text-[15px] max-lg:text[6px] ">
								"{arr[indx].paragraph}"
							</p>
						</div>
						<div className="py-4 max-lg:hidden">
							<h3 className="font-semibold max-lg:text[10px]">{arr[indx].author}</h3>
							<p className="text-[12px] max-lg:text[8px] text-[#8a8a8a]">{arr[indx].job}</p>
							<div className="flex items-center justify-items-start py-2">
								<button
									disabled={indx === 0}
									onClick={onIndxChangePrev}
									className="bg-[#00cc99] rounded-full p-1 disabled:bg-[#d2d2d2] "
								>
									<FaArrowLeft className="text-white w-[35px] h-[35px] " />
								</button>
								<button
									disabled={indx === arr.length - 1}
									onClick={onIndxChangeNext}
									className="bg-[#00cc99] ml-2 rounded-full p-1 disabled:bg-[#d2d2d2]"
								>
									<FaArrowRight className="text-white w-[35px] h-[35px]" />
								</button>
							</div>
						</div>
					</div>
					<div className=" col-span-1 lg:col-start-2 flex lg:justify-end  max-lg:justify-center items-center lg:px-4">
						<Image
							src={arr[indx].img}
							width={350}
							height={300}
							className="rounded-xl"
							alt="square"
						/>
					</div>
					</div>
                    <div className="py-4 lg:hidden max-lg:text-center">
							<h3 className="font-semibold max-lg:text[10px] ">{arr[indx].author}</h3>
							<p className="text-[12px] max-lg:text[8px] text-[#8a8a8a]">{arr[indx].job}</p>
                    <div className="flex items-center justify-center py-2 ">
								<button
									disabled={indx === 0}
									onClick={onIndxChangePrev}
									className="bg-[#00cc99] rounded-full p-1 disabled:bg-[#d2d2d2]"
								>
									<FaArrowLeft className="text-white w-[35px] h-[35px] " />
								</button>
								<button
									disabled={indx === arr.length - 1}
									onClick={onIndxChangeNext}
									className="bg-[#00cc99] ml-2 rounded-full p-1 disabled:bg-[#d2d2d2]"
								>
									<FaArrowRight className="text-white w-[35px] h-[35px]" />
								</button>
                                </div>
			</div>
    	</>
	);
};
export default Feedback;
