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
		<div className="flex bg-white rounded-xl my-4 max-lg:mt-0  max-lg:pt-0  justify-between p-4  max-lg:space-x-1">
			<input
				className="bg-[#f9f9f9] rounded-xl px-6 max-lg:w-[160px] py-2 placeholder-black"
				placeholder="&#x1F50E;&#xFE0E;	Job title or keyword"
			/>
			
				<div className="bg-[#f9f9f9] rounded-xl px-14 max-lg:px-2 py-2 flex items-center ">
						<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className={`w-[20px] h-[20px] ${!value?"":"invisible"}`}
					/>
					<select onChange={onChangeHandler} className=" bg-[#f9f9f9]  ">
						<option disabled hidden selected value="">
							
							location
						</option>
						<option value="about">About</option>
						<option value="contact">contact</option>
						<option value="small">small</option>
						<option value="text">text</option>
					</select>
				</div>
			
			
			<button className="rounded-xl  bg-[#00cc99] px-4 max-lg:px-4  text-white">
				Search
			</button>
		</div>
	);
};
export default SearchBar;
