import { cn } from "@/lib/utils";
import React from "react";

interface Props {
	className?: string;
	items: string[];
}

const indexActiveCategory: number = 0;

export const Categories: React.FC<Props> = ({ className, items }) => {
	return (
		<div
			className={cn(
				"inline-flex gap-1 bg-gray-100 p-1 rounded-2xl",
				className
			)}
		>
			{items.map((category, index) => {
				return (
					<a
						key={index}
						className={cn(
							"flex items-center font-bold h-11 rounded-2xl px-5",
							indexActiveCategory === index &&
								"bg-white shadow-md shadow-gray-200 text-primary"
						)}
					>
						<button>{category}</button>
					</a>
				);
			})}
		</div>
	);
};
