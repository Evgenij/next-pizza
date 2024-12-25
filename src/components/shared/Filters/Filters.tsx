import React, { FC } from "react";
import { Title } from "../Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { cn } from "@/lib/utils";
import { Input } from "../../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxGroup } from "./CheckboxGroup";

interface Props {
	className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex flex-col space-y-6", className)}>
			<Title text="Filters" size="sm" className="font-bold" />
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="For to make" value="1" />
				<FilterCheckbox text="News" value="2" />
			</div>
			<div className=" flex flex-col space-y-3 border-y border-gray-100 py-4 w-full  pb-10">
				<p className="font-bold">Cost</p>
				<div className="flex space-x-2">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						placeholder="0"
						defaultValue={0}
					/>
				</div>
				<RangeSlider value={[300, 700]} min={0} max={1200} step={50} />
			</div>
			<CheckboxGroup
				title="Size"
				limit={2}
				name="Size"
				defaultItems={[
					{
						text: "13",
						value: "1",
					},
					{
						text: "14",
						value: "2",
					},
					{
						text: "15",
						value: "3",
					},
					{
						text: "16",
						value: "4",
					},
				]}
				items={[
					{
						text: "13",
						value: "1",
					},
					{
						text: "14",
						value: "2",
					},
					{
						text: "15",
						value: "3",
					},
					{
						text: "16",
						value: "4",
					},
				]}
			/>
		</div>
	);
};
