const TitleText=(props)=>{
return(
    <>
    <h1 className="font-bold text-[30px] max-lg:text-[18px] py-4 text-center ">{props.title}</h1>
            <p className="text-[#8a8a8a]  text-center  max-lg:text-[12px] py-6 lg:mx-20 max-lg:py-2 ">{props.paragraph}</p>
            </>
)

}
export default TitleText