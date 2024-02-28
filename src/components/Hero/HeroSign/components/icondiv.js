const IconDiv=(props)=>{
    return(
        <div className={`rounded bg-white text-[#00cc99] w-[50px] h-[50px] text-[25px] p-3  ${props.className}`}>
            {props.children}
        </div>
    )
}
export default IconDiv