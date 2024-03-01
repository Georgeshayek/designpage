import Item from "./item";


const Items = () => {
    
	const items = [
		{
			title: "Register",
            icon:"/logout.svg",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
		},
		{
			title: "Create a Resume",
            icon: "/pdf.svg", 
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
		},
		{
			title: "Find Job",
            icon: "/clipboard.svg",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
		},
		{
			title: "Apply Job",
            icon: "/up-arrow.svg",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim eget nisl bibendum condimentum pretium id elit. Nullam ac eros placerat velit faucibus tempor fermentum sit amet urna.",
		},
	];
    return(
        <>
        <div className="grid lg:grid-cols-4 max-lg:grid-cols-2 max-lg:gap-1  max-lg:py-4 py-16">
            {items.map((item, index)=><Item key={index} title={item.title} paragraph={item.paragraph} icon={item.icon}/>)}
        </div>
        </>
    )
};
export default Items