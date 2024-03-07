import TextsImg from "./components/textsimg"
import TextsWork from "./components/textswork"
import Image from "next/image"
const { default: Items } = require("./components/items")

const Work=()=>{
    return(
        <>
        <div className="bg-[#fbfbfb]">   
   
        <div className="container mx-auto">
        <div className="py-10 px-[68px]  max-lg:px-4">

    <div className=" grid grid-cols-4 py-6  ">
        <TextsWork/>
        <div className="lg:col-span-1 px-6 lg:col-start-4 ml-1  lg:row-start-1 place-self-end    max-lg:hidden">
            <button className="py-4 px-12 max-lg:py-3  ease-in duration-300  border border-[#00cc99] text-[#00cc99] hover:bg-[#00cc99] hover:text-white bg-transparent rounded  ">Learn More</button>
        </div>
    </div>
    
        <Items/>
        <div className="flex justify-center py-4  max-lg:pb-8">
        <button className="py-3 px-12  max-lg:py-2 max-lg:px-8  ease-in duration-300  lg:my-[20px] hover:bg-[#00cc99] hover:text-white border border-[#00cc99] text-[#00cc99] bg-transparent rounded  lg:hidden">Learn More</button>
        </div>
        <div className="flex max-lg:flex-col max-lg:px-4">
            <Image src="/greyback.jpeg" width={1000} height={500} alt="grey image" className="rounded-xl"/>
            <TextsImg/>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}
export default Work