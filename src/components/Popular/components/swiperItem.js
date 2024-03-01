import Image from 'next/image'
const SwiperItem=(props)=>{
    return (
        
        <div className="ease-in-out duration-300 group bg-[#ffffff] lg:p-4 max-lg:min-w-[120px] mr-4 max-lg:mt-4 min-h-[210px]  max-lg:min-h-[150px] rounded-xl relative hover:bg-[#00cc99]">
            {props.imageurl}
            <h2 className="font-bold lg:text-[20px] max-lg:text-[12px]  py-2 pb-8 max-lg:pb-4 max-lg:ml-1 group-hover:text-white ">{props.title}</h2>
            <p className=" absolute text-[#8a8a8a] text-[8px] bottom-2 max-lg:ml-1 group-hover:text-white">{props.vacancy} Jobs Vacancy</p>
        </div>
        
    )
}
export default SwiperItem