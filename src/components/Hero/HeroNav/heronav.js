import SearchBar from "./components/searchbar"
import Texts from "./components/texts"

const { default: Navbar } = require("./components/navbar")

const HeroNav=()=>{
    return(
        <div className="  basis-[60%] px-[60px]  max-lg:px-0">
            <Navbar/>
          
            <div className="pb-[80px]">
            <Texts/>
            <SearchBar/>
        </div>
        </div>
    )
}
export default HeroNav