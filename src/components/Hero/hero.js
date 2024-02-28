import HeroNav from "./HeroNav/heronav"
import HeroSign from "./HeroSign/herosign"

const Hero=()=>{
   return(
   <div className="flex max-lg:flex-col bg-[#f1f1f1] max-lg:bg-white">
        <HeroNav/>
        <HeroSign/>
        
    </div>)
}

export default Hero