const { default: Link } = require("next/link")

const SignNav=()=>{
    return(
        <div className="flex justify-center space-x-6 my-10 p-2 max-lg:hidden ">
            <Link href="/" className="font-semibold text-white"> Sign in</Link>
            <button className=" bg-white rounded font-semibold text-[14px] p-1">create account</button>

        </div>
    )
}
export default SignNav