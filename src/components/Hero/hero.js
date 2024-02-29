import HeroNav from "./HeroNav/heronav"
import HeroSign from "./HeroSign/herosign"

const Hero=()=>{
   return(

    <div className="backgrounds">
    <div className="container mx-auto">

    <div className="bg-[#f1f1f1] flex max-lg:flex-col max-lg:bg-white">


        <HeroNav/>
        <HeroSign/>
        
    </div>
</div>
</div>
    )
}

export default Hero