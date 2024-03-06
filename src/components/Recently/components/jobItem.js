import { FaMapMarkerAlt } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import ObjectCont from "./objectcont";

const JobItem=(props)=>{
    return(
        <div className=" group bg-[#ffffff] max-lg:py-2   lg:p-4 max-lg:min-w-[120px] mr-4 max-lg:mt-4 min-h-[210px]  max-lg:min-h-[150px] rounded-xl">
        <div className={`${props.style} max-lg:ml-1 	rounded-full w-[50px] flex items-center justify-center`}>{props.imageurl} </div>
        

        <h2 className="font-bold lg:text-[20px] max-lg:text-[12px]  py-2   max-lg:ml-1  ">{props.title}</h2>
        <h3 className='font-semibold text-[#8a8a8a] text-[14px] max-lg:text-[10px] max-lg:ml-1  pb-2' >{props.company}</h3>
        <p className="  text-[#8a8a8a] text-[10px] max-lg:text-[7px] pb-2 max-lg:ml-1">{props.paragraph} </p>
        <div className='flex py-2'>
            <ObjectCont><FaMapMarkerAlt className="  w-4 h-4 max-lg:w-2 max-lg:h-2 mr-1 "  />{ props.location}</ObjectCont>
            <ObjectCont><TbBriefcase2 className=" w-4 h-4 max-lg:w-2 max-lg:h-2 mr-1 "/>{props.type}</ObjectCont>
       </div>
       <button className="p-4 max-lg:p-1 max-lg:text-[12px] text-[#00cc99] bg-transparent flex items-center"> Apply Now <MdKeyboardArrowRight className=" w-4 h-4" /> </button>
    </div>
    )
}
export default JobItem