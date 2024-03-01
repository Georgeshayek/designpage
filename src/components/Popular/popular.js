import SwiperCont from "./components/swipercont";

const Popular = () => {
	return (
		<div class="bg-[#00cc99] bg-opacity-[0.251]">
			<div className="container mx-auto">
				<div className="py-10 px-[68px]  max-lg:px-4">
                <h1 className="font-bold text-[30px] max-lg:text-[18px] py-4 text-center ">Popular Job Categories</h1>
            <p className="text-[#8a8a8a]  text-center  max-lg:text-[12px] py-4 lg:mx-20 max-lg:py-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.</p>
            <SwiperCont/>

				</div>
			</div>
		</div>
	);
};
export default Popular;
