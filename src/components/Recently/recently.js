import Swiper from "swiper";
import SwiperRecently from "./components/swiperRecently";

const { default: TitleText } = require("../Shared/titeltext");

const Recently = () => {
	return (
	
			<>
			<div className="pb-6 max-lg:px-4 ">
					<TitleText
						title="Recently Added Job"
						paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna."
					/>
					<SwiperRecently />
                    <div className="flex justify-center py-6">
        <button className="py-3 px-12 max-lg:py-2 max-lg:px-8   border border-[#00cc99] text-[#00cc99] bg-transparent rounded">View More</button>
        </div>
		</div>
		</>	
	);
};
export default Recently;
