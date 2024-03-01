import Image from 'next/image'
const SwiperItem=(props)=>{
    return (
        
        <div className="group bg-[#ffffff] lg:p-4 max-lg:min-w-[120px] mr-4 max-lg:mt-4 min-h-[210px]  max-lg:min-h-[150px] rounded-xl relative hover:bg-[#00cc99]">
            <Image src={props.imageurl} height={50} width={50} alt='image' className='py-2 max-lg:ml-1 group-hover:brightness-200	'/>
            <h2 className="font-bold lg:text-[20px] max-lg:text-[12px]  py-2 pb-8 max-lg:pb-4 max-lg:ml-1 group-hover:text-white ">{props.title}</h2>
            <p className=" absolute text-[#8a8a8a] text-[8px] bottom-2 max-lg:ml-1 group-hover:text-white">{props.vacancy} Jobs Vacancy</p>
        </div>
        
    )
}
export default SwiperItem