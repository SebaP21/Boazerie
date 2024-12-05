"use client";

import { FC, useState } from "react";
import { FaqContentQuery } from "../../../../../lib/generated/graphql";

type FaqCardsProps = {
	allFaqBox: FaqContentQuery["allFaqBox"];
};
export const FaqCards: FC<FaqCardsProps> = ({ allFaqBox }) => {
	const [expandedCardId, setExpandedCardId] = useState<number | undefined>(0);

	const handleExpand = (index: number) => {
		setExpandedCardId((prev) => (prev === index ? undefined : index));
	};

	return (
		<div className='w-full border border-gray-200 border-b-transparent flex flex-col rounded-sm md:w-[80%] md:mx-auto'>
			{allFaqBox?.nodes.map((data, index) => (
				<div
					key={index}
					className='border-b border-black'
				>
					<div
						onClick={() => handleExpand(index)}
						className='cursor-pointer flex justify-between items-center p-4'
					>
						<p
							className={`text-lg font-semibold font-serif ${
								expandedCardId === index ? "text-gray-600" : "text-black"
							}`}
						>
							{data.title}
						</p>
					</div>

					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out ${
							expandedCardId === index
								? "max-h-[1000px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<p className='px-4 py-2 text-break'>{data.content?.slice(4, -5)}</p>
					</div>
				</div>
			))}
		</div>
	);
};
