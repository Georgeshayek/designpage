import Image from 'next/image'
const SwiperItem=(props)=>{
    return (
        
        <div className="flex flex-col justify-between ease-in-out duration-300 group bg-[#ffffff] p-4 max-lg:p-4 max-lg:min-w-[140px] max-lg:min-h-[160px] mr-4 max-lg:mt-4 min-h-[210px] max-h-[210px]  rounded-xl  hover:bg-[#00cc99]">
           <div>       
            {props.imageurl}
    
                 <h2 className="font-bold lg:text-[20px] max-lg:text-[12px]  py-2 pb-8 max-lg:pb-4 max-lg:ml-1 group-hover:text-white ">{props.title}</h2>
            </div>
            <div>
            <p className="  text-[#8a8a8a] text-[8px] justify-self-end max-lg:ml-1 group-hover:text-white">{props.vacancy} Jobs Vacancy</p>
            </div>
            </div>
       
    )
}
export default SwiperItem