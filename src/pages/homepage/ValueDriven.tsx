import React, { FC } from "react";
import DrivenCard from "../../components/cards/DrivenCard";

const drivenItems = [
	{
		buttonName: "Learn",
		buttonColor: "#5C76FF",
		header: "Tailored Educational Paths",
		content: "Access structured courses, coaching, and<br/> bundles tailored to different levels, helping<br/> professionals advance their data and AI skills.",
		cardColor: "#F3F8FE",
		imgUrl: "",
		linkUrl: "",
	},
	{
		buttonName: "Read",
		buttonColor: "#F15F31",
		header: "Insightful Readings",
		content: "Discover a library of articles and books that<br/> provide strategic insights into how data and AI<br/> can create real-world value.",
		cardColor: "#FFF7F4",
		imgUrl: "",
		linkUrl: "",
	},
];

const ValueDriven: FC = () => {
	return (
		<div className="mt-14 px-10">
			<div>
				<span className="text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-5 py-1">Value-Driven</span>
			</div>
			<div className="text-5xl leading-15 font-bold mt-8 text-text-color">
				Unlock Value with Edosa’s Offerings
			</div>
			<div className="text-2xl leading-8 mt-8 text-text-color">
				Explore our comprehensive offerings designed to support your growth in data value and AI through learning,<br /> reading, watching, and personal coaching.
			</div>
			<div className="col-span-2 flex gap-10 mt-6">
				{
					drivenItems.map((item, index) => (
						<DrivenCard
							key={index}
							header={item.header}
							content={item.content}
							cardColor={item.cardColor}
							buttonName={item.buttonName}
							buttonColor={item.buttonColor}
						/>
					))
				}
			</div>

		</div>
	);

}

export default ValueDriven;