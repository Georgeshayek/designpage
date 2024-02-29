const IconDiv=(props)=>{
    return(
        <div className={`flex items-center justify-center rounded bg-white text-[#00cc99] w-[50px] h-[50px] text-[25px]  ${props.className}`}>
            {props.children}
        </div>
    )
}
export default IconDiv