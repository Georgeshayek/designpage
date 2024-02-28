import SearchBar from "./components/searchbar"
import Texts from "./components/texts"

const { default: Navbar } = require("./components/navbar")

const HeroNav=()=>{
    return(
        <div className=" flex-col basis-[60%]">
            <Navbar/>
            <Texts/>
            <SearchBar/>
        </div>
        
    )
}
export default HeroNav