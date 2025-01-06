"use client";

import React, { FC, useEffect, useState } from "react";
import { Title } from "../Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { cn } from "@/lib/utils";
import { Input } from "../../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxGroup } from "./CheckboxGroup";
import { useFilterDiameters } from "@/hooks/useFilterDiameters";
import { useSet } from "react-use";

interface Props {
	className?: string;
}

interface PropsRange {
	from: number;
	to: number;
}

const defaultPrices = {
	max: 1500,
	from: 200,
	to: 700,
};

export const Filters: FC<Props> = ({ className }) => {
	const { diameters, loading, onAddID, selectedDiameters } =
		useFilterDiameters();

	const [selectedColors, { toggle: toggleColors }] = useSet(
		new Set<string>([])
	);

	const [prices, setPrices] = useState<PropsRange>({
		from: defaultPrices.from,
		to: defaultPrices.to,
	});

	const diametersItems = diameters.map((diameter) => ({
		value: String(diameter.id),
		text: diameter.name,
	}));

	const onChangePrice: React.ChangeEventHandler<HTMLInputElement> = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPrices((prev) => ({
			...prev,
			[event.target.name]: Number(event.target.value),
		}));
	};

	return (
		<div className={cn("flex flex-col space-y-6", className)}>
			<Title text="Filters" size="sm" className="font-bold" />

			<CheckboxGroup
				title="Size"
				limit={5}
				name="diameter-size"
				defaultItems={diametersItems}
				items={diametersItems}
				loading={loading}
				onClickCheckbox={onAddID}
				selectedItems={selectedDiameters}
			/>
			<div className=" flex flex-col space-y-3 border-y border-gray-100 py-4 w-full  pb-10">
				<p className="font-bold">Cost</p>
				<div className="flex space-x-2">
					<Input
						type="number"
						placeholder="0"
						name="from"
						max={defaultPrices.max}
						value={prices.from}
						onChange={(e) => onChangePrice(e)}
					/>
					<Input
						type="number"
						name="to"
						max={defaultPrices.max}
						placeholder="0"
						value={prices.to}
						onChange={(e) => onChangePrice(e)}
					/>
				</div>
				<RangeSlider
					value={[prices.from, prices.to]}
					max={defaultPrices.max}
					step={50}
					onValueChange={([from, to]) =>
						setPrices({ from: from, to: to })
					}
				/>
			</div>
			<CheckboxGroup
				title="Color"
				limit={3}
				name="wheels-color"
				defaultItems={[
					{ text: "Black", value: "black" },
					{ text: "Gray", value: "gray" },
					{ text: "White", value: "white" },
					{ text: "Gold", value: "gold" },
				]}
				items={[
					{ text: "Black", value: "black" },
					{ text: "Gray", value: "gray" },
					{ text: "White", value: "white" },
					{ text: "Gold", value: "gold" },
				]}
				loading={loading}
				onClickCheckbox={onAddID}
				selectedItems={selectedColors}
			/>
		</div>
	);
};
