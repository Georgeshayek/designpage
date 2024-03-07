"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Import the solid style icon
import { useState } from "react";

const SearchBar = () => {
	const [value, setValue] = useState("");
	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className="flex bg-white rounded-xl my-4 max-lg:mt-0  max-lg:pt-0   justify-between lg:p-4 max-lg:space-x-2 ">
			<input
				className="bg-[#f9f9f9] rounded-xl focus:outline-none px-6 max-lg:w-[160px] py-2 placeholder-black"
				placeholder="&#x1F50E;&#xFE0E;	Job title or keyword"
			/>
			
				<div className="bg-[#f9f9f9] rounded-xl px-14 max-lg:px-0 py-2 flex items-center ">
						<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className={`w-[20px] h-[20px] pr-4 max-lg:pr-2 ${!value?"":"invisible"}`}
					/>
					<select onChange={onChangeHandler} defaultValue="" className=" focus:outline-none  bg-[#f9f9f9]  ">
						<option disabled hidden  value="">
							
							location
						</option>
						<option value="about">About</option>
						<option value="contact">contact</option>
						<option value="small">small</option>
						<option value="text">text</option>
					</select>
				</div>
			
			
			<button className="rounded-xl ease-in duration-300 bg-[#00cc99] px-4 max-lg:px-2  text-white  hover:text-[#00cc99] hover:bg-transparent border border-transparent hover:border-[#00cc99]">
				Search
			</button>
		</div>
	);
};
export default SearchBar;
