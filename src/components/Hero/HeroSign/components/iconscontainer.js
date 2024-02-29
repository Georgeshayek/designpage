const { default: IconDiv } = require("./icondiv")
import { GrWifi } from "react-icons/gr";
import { GrShield } from "react-icons/gr";
import { GrScheduleNew } from "react-icons/gr";
const IconsContainer=()=>{
    return(
        <div className="container mx-auto">
        <div className="relative max-lg:mt-6 min-h-[300px] ">
           <IconDiv className="absolute top-0 left-12 -rotate-3"><GrWifi/></IconDiv>
           <IconDiv className="absolute top-20 right-20 rotate-6"><GrShield/></IconDiv>
           <IconDiv className="absolute bottom-10 left-20 -rotate-12"><GrScheduleNew/></IconDiv> 
        </div>
        </div>
    )
}
export default IconsContainer