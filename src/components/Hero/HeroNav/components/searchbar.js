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
		<div className="flex bg-white rounded-xl my-4 justify-center mx-auto space-x-8 p-4 w-[80%]">
			<input
				className="bg-[#f9f9f9] rounded-xl w-[200px] max-lg:w-[120px] p-2 placeholder-black"
				placeholder="&#x1F50E;&#xFE0E;	Job title or keyword"
			/>
			{!value && (
				<div className="bg-[#f9f9f9] rounded-xl w-[150px] max-lg:w-[100px] p-2 flex ">
					<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className="w-[20px] h-[20px]"
					/>
					<select onChange={onChangeHandler} className="w-[150px] bg-transparent max-lg:w-[110px]">
						<option disabled hidden selected value="">
							
							location
						</option>
						<option value="about">About</option>
						<option value="contact">contact</option>
						<option value="small">small</option>
						<option value="text">text</option>
					</select>
				</div>
			)}
			{value && (
				<select
					className="bg-[#f9f9f9] rounded-xl w-[150px] max-lg:w-[110px] p-2"
					value={value}
					onChange={onChangeHandler}
				>
					<option value="about">About</option>
					<option value="contact">contact</option>
					<option value="small">small</option>
					<option value="text">text</option>
				</select>
			)}
			<button className="rounded-xl  bg-[#00cc99] w-[100px]  text-white">
				Search
			</button>
		</div>
	);
};
export default SearchBar;
