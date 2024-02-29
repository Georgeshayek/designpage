import TextsImg from "./components/textsimg"
import TextsWork from "./components/textswork"
import Image from "next/image"
const { default: Items } = require("./components/items")

const Work=()=>{
    return(
        <>
        <div className="bg-[#fbfbfb]">      
        <div className="container mx-auto">
        <div className="px-20 max-lg:px-8">
    <div className=" flex lg:flex-wrap max-lg:flex-col max-lg:order1   py-6 items-center">
        <TextsWork/>
        <div className="lg:basis-[35%] lg:px-20 max-lg:order-last max-lg:mx-auto ">
            <button className="py-4 px-14 mt-[120px] border border-[#00cc99] text-[#00cc99] bg-transparent rounded  ">Learn More</button>
        </div>
        <Items/>
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