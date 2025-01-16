import { cn } from "@/lib/utils";
import React, { FC } from "react";

type Variant = {
	id: number;
	name: string;
	value: string;
};

interface Props {
	className?: string;
	items: readonly Variant[];
	onClick: (value: Variant["id"]) => void;
	selectedValues: Variant["id"][];
}

export const SelectorDiameter: FC<Props> = ({
	className,
	items,
	selectedValues,
}) => {
	return (
		<div className={cn(className, "flex p-2 bg-gray-100 gap-2")}>
			{items.map((item) => {
				return (
					<button
						key={item.id}
						className={cn(
							"px-2 p-1 text-center w-full bg-white ",

							selectedValues.includes(item.id)
								? "bg-primary text-white"
								: "hover:bg-gray-200"
						)}
					>
						{item.name}
					</button>
				);
			})}
		</div>
	);
};
