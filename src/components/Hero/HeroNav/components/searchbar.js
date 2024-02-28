import { GrFormDown } from "react-icons/gr";
import { GrFormSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";



const SearchBar=()=>{
    return(
        <div className="flex bg-white rounded-xl my-4 justify-center mx-auto space-x-8 p-4 w-[80%]">
            <input className="bg-[#f9f9f9] rounded-xl w-[200px] max-lg:w-[120px] p-2 placeholder-black" placeholder="Job title or keyword"/>
            
            <select className="bg-[#f9f9f9] rounded-xl w-[150px] max-lg:w-[100px] p-2">

                <option disabled selected value="">location  </option>
                <option>contact</option>
                <option>contact</option>
            </select>
            <button className="rounded-xl  bg-[#00cc99] w-[100px]  text-white">Search</button>
        </div>
    )
}
export default SearchBar