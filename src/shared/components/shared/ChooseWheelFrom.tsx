"use client";

import { cn } from "@/shared/lib/utils";
import React, { FC, useState } from "react";
import { WheelImage } from "./WheelImage";
import { Title } from "./Title";
import { SelectorDiameter } from "./SelectorDiameter";
import { Button } from "../ui";
import { IWheelFullData } from "@/types/types";

interface Props {
	className?: string;
	onClickAdd?: VoidFunction;
	wheel: IWheelFullData;
}

export const ChooseWheelFrom: FC<Props> = ({
	className,
	onClickAdd,
	wheel,
}) => {
	const cost = 2900;
	const [selectedDiameters, setSelectedDiameters] = useState<number[]>([]);

	const handleSelectDiameters = (id: number) => {
		if (selectedDiameters.includes(id)) {
			setSelectedDiameters((prev) => prev.filter((item) => item !== id));
		} else {
			setSelectedDiameters((prev) => [...prev, id]);
		}

		console.log(selectedDiameters);
	};

	return (
		<div className={cn(className, "flex")}>
			<WheelImage
				src={wheel.image}
				diameters={wheel.diameters.length}
				currentDiameter={1}
			/>
			<div className="p-4 py-3 flex-1 flex flex-col gap-4">
				<header>
					<Title
						text={wheel.name}
						size="md"
						className="font-extrabold"
					></Title>
					<Title
						text={wheel.color}
						size="xs"
						className="mb-1"
					></Title>
				</header>

				<div>
					<Title
						text="Sizes"
						size="xs"
						className="font-extrabold"
					></Title>
					<SelectorDiameter
						items={wheel.diameters.map((item) => ({
							id: item.id,
							value: item.name,
							name: item.name,
							cost: item.price,
						}))}
						selectedValues={selectedDiameters}
						onSelectItem={handleSelectDiameters}
					/>
				</div>

				<Button className="w-full">Add to cart [{cost} PLN]</Button>
			</div>
		</div>
	);
};
