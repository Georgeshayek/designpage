const { default: Link } = require("next/link")
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the solid style icon

const SignNav=()=>{
    return(
        <div className="flex justify-center items-center space-x-6 my-10 p-2 max-lg:hidden ">
            <Link href="/" className="font-semibold text-white"> Sign in</Link>
            <button className=" bg-white rounded font-semibold text-[16px] p-1 flex items-center"> <FontAwesomeIcon icon={faSignOutAlt} className="w-[20px] h-[20px] mr-1"/>create account </button>

        </div>
    )
}
export default SignNav