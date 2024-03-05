import TextsImg from "./components/textsimg"
import TextsWork from "./components/textswork"
import Image from "next/image"
const { default: Items } = require("./components/items")

const Work=()=>{
    return(
        <>
        <div className="bg-[#fbfbfb]">   
   
        <div className="container mx-auto">
        <div className="py-10 px-[68px]  max-lg:px-8">

    <div className=" grid grid-cols-4 py-6 items-center">
        <TextsWork/>
        <div className="lg:col-span-1 px-6 lg:col-start-4 ml-1 max-lg:row-start-3 max-lg:col-start-1 max-lg:col-span-3 max-lg:mx-auto ">
            <button className="py-4 px-12 max-lg:py-3   lg:mt-[120px] border border-[#00cc99] text-[#00cc99] bg-transparent rounded  max-lg:hidden">Learn More</button>
        </div>
    </div>
        <Items/>
        <div className="flex justify-center py-4">
        <button className="py-3 px-12  max-lg:py-2 max-lg:px-8   lg:my-[20px] border border-[#00cc99] text-[#00cc99] bg-transparent rounded  lg:hidden">Learn More</button>
        </div>
        <div className="flex max-lg:flex-col">
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