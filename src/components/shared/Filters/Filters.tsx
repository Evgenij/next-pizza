"use client";

import React, { FC, useEffect, useState } from "react";
import { Title } from "../Title";
import { cn } from "@/lib/utils";
import { Input } from "../../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxGroup } from "./CheckboxGroup";
import { useFilterDiameters } from "@/hooks/useFilterDiameters";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
	className?: string;
}

interface PropsRange {
	from: number;
	to: number;
}

const defaultValues = {
	max: 1500,
	from: 200,
	to: 700,
};

interface QueryFilters extends PropsRange {
	diameters: string;
	colors: string;
}

export const Filters: FC<Props> = ({ className }) => {
	const router = useRouter();
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	const { diameters, loading, onAddID, selectedDiameters } =
		useFilterDiameters();

	const [colors, { toggle: toggleColors }] = useSet(
		new Set<string>(
			searchParams.get("colors")
				? searchParams.get("colors")?.split(",")
				: []
		)
	);

	const [prices, setPrices] = useState<PropsRange>({
		from: Number(searchParams.get("from")) || defaultValues.from,
		to: Number(searchParams.get("to")) || defaultValues.to,
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

	useEffect(() => {
		const filters = {
			from: prices.from,
			to: prices.to,
			diameters: Array.from(selectedDiameters),
			colors: Array.from(colors),
		};

		const query = qs.stringify(filters, { arrayFormat: "comma" });

		console.log(searchParams.get("colors"), 9);

		router.push(`/?${query}`, { scroll: false });
	}, [prices, colors, selectedDiameters]);

	useEffect(() => {
		console.log(searchParams.get("from"));
	}, []);

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
						max={defaultValues.max}
						value={prices.from}
						onChange={(event) => onChangePrice(event)}
					/>
					<Input
						type="number"
						name="to"
						max={defaultValues.max}
						placeholder="0"
						value={prices.to}
						onChange={(event) => onChangePrice(event)}
					/>
				</div>
				<RangeSlider
					value={[prices.from, prices.to]}
					max={defaultValues.max}
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
				items={[
					{ text: "Black", value: "black" },
					{ text: "Gray", value: "gray" },
					{ text: "White", value: "white" },
					{ text: "Gold", value: "gold" },
				]}
				loading={loading}
				onClickCheckbox={toggleColors}
				selectedItems={colors}
			/>
		</div>
	);
};
