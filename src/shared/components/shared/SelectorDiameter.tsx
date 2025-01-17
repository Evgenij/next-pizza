"use client";

import { cn } from "@/shared/lib/utils";
import React, { FC, useEffect } from "react";

type Variant = {
	id: number;
	name: string;
	value: string;
	cost: number;
};

interface Props {
	className?: string;
	items: readonly Variant[];
	onSelectItem: (value: number) => void;
	selectedValues: number[];
}

export const SelectorDiameter: FC<Props> = ({
	className,
	items,
	selectedValues,
	onSelectItem,
}) => {
	useEffect(() => {
		if (selectedValues.length === 0) {
			onSelectItem(items[0].id);
		}
	}, []);

	return (
		<div
			className={cn(className, "grid grid-cols-4 p-2 bg-gray-100 gap-2")}
		>
			{items.map((item) => {
				return (
					<button
						onClick={() => onSelectItem?.(item.id)}
						key={item.id}
						className={cn(
							"px-2 p-1 text-center w-full bg-white flex flex-col items-center",
							selectedValues.includes(item.id)
								? "bg-primary text-white"
								: "hover:bg-gray-200"
						)}
					>
						<p className="font-semibold">{item.name}</p>
						<span className="text-sm opacity-60">
							+{item.cost} PLN
						</span>
					</button>
				);
			})}
		</div>
	);
};
