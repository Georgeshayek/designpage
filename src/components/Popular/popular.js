import SwiperCont from "./components/swipercont";
import TitleText from "../Shared/titeltext";
const Popular = () => {
	return (
		<div className="bg-[#00cc99] bg-opacity-[0.051]">
			<div className="container mx-auto">
				<div className="py-12 px-[68px]  max-lg:px-4">
				<TitleText title="Popular Job Categories" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna."/>
				<SwiperCont/>
				<div className="flex justify-center py-6">
        <button className="py-3 px-12 max-lg:py-2 max-lg:px-8  hover:bg-[#00cc99] hover:text-white  border border-[#00cc99] text-[#00cc99] bg-transparent rounded">View More</button>
        </div>
				</div>
			</div>
		</div>
	);
};
export default Popular;
