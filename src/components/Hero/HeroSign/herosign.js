import IconsContainer from "./components/iconscontainer"
import SignNav from "./components/signNav"

const HeroSign=()=>{
    return(
        <div className="  flex-col items-center justify-center bg-[#00cc99] basis-[40%] rounded-l-3xl">
            <SignNav/>
            <IconsContainer/>
        </div>
    )
}
export default HeroSign