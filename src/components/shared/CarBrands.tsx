"use client";

import { cn } from "@/lib/utils";
import { useCarBrandStore } from "@/store/carBrand";
import { ICarBrand } from "@/types/types";
import React from "react";

interface Props {
	className?: string;
	items: ICarBrand[];
}

export const CarBrands: React.FC<Props> = ({ className, items }) => {
	const activeBrandID = useCarBrandStore((state) => state.activeID);

	return (
		<div
			className={cn(
				"inline-flex gap-1 bg-gray-100 p-1 rounded-md",
				className
			)}
		>
			{items.map(({ id, name }) => {
				return (
					<a
						href={`/#${name}`}
						key={id}
						className={cn(
							"flex items-center font-bold h-11 rounded-sm px-5 cursor-pointer ",
							activeBrandID === id &&
								"bg-white shadow-md shadow-gray-200 text-primary",
							activeBrandID !== id && "hover:bg-gray-200"
						)}
					>
						<button>{name}</button>
					</a>
				);
			})}
		</div>
	);
};
