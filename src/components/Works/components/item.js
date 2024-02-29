import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
const Item=(props)=>{
    return (
        
        <div className="bg-[#ffffff] lg:p-4 mr-4 max-lg:mt-4">
            <Image src={props.icon} height={50} width={50} alt='image' className='py-2'/>
            <h2 className="font-bold py-2">{props.title}</h2>
            <p className="text-[#8a8a8a] text-[10px] py-2">{props.paragraph}</p>
        </div>
        
    )
}
export default Item