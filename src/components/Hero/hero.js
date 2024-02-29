import HeroNav from "./HeroNav/heronav"
import HeroSign from "./HeroSign/herosign"

const Hero=()=>{
   return(

    <div className="bg-[#f1f1f1]">

    <div className="flex max-lg:flex-col  max-lg:bg-white">


        <HeroNav/>
        <HeroSign/>
        
    </div>
</div>
    )
}

export default Hero