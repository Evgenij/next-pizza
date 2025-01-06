"use client";

import React, { FC, useEffect } from "react";
import { Title } from "../Title";
import { cn } from "@/lib/utils";
import { Input } from "../../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxGroup } from "./CheckboxGroup";
import { useDiameters, useFilters, useQueryFilters } from "@/hooks";

interface Props {
	className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
	const { diameters, loading } = useDiameters();
	const filters = useFilters();

	useQueryFilters(filters);

	const diametersItems = diameters.map((diameter) => ({
		value: String(diameter.id),
		text: diameter.name,
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrices("from", prices[0]);
		filters.setPrices("to", prices[1]);
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
				onClickCheckbox={filters.setDiameters}
				selectedItems={filters.diameters}
			/>
			<div className=" flex flex-col space-y-3 border-y border-gray-100 py-4 w-full  pb-10">
				<p className="font-bold">Cost</p>
				<div className="flex space-x-2">
					<Input
						type="number"
						placeholder="0"
						name="from"
						max={1500}
						value={filters.prices.from}
						onChange={(event) =>
							filters.setPrices(
								"from",
								Number(event.target.value)
							)
						}
					/>
					<Input
						type="number"
						name="to"
						max={1500}
						placeholder="0"
						value={filters.prices.to}
						onChange={(event) =>
							filters.setPrices("to", Number(event.target.value))
						}
					/>
				</div>
				<RangeSlider
					value={[filters.prices.from, filters.prices.to]}
					max={1500}
					step={50}
					onValueChange={updatePrices}
				/>
			</div>
			<CheckboxGroup
				title="Color"
				limit={3}
				name="wheels-color"
				items={[
					{ text: "Black", value: "black" },
					{ text: "Gray", value: "gray" },
					{ text: "White", value: "white" },
					{ text: "Gold", value: "gold" },
				]}
				onClickCheckbox={filters.setColors}
				selectedItems={filters.colors}
			/>
		</div>
	);
};
