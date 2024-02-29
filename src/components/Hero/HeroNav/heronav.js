import SearchBar from "./components/searchbar"
import Texts from "./components/texts"

const { default: Navbar } = require("./components/navbar")

const HeroNav=()=>{
    return(
        <div className="  basis-[60%] px-[60px]  max-lg:px-0">
            <Navbar/>
            <Texts/>
            <SearchBar/>
        </div>
        
    )
}
export default HeroNav