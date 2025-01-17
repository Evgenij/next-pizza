"use client";

import React, { FC, useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./FilterCheckbox";
import { Input, Skeleton } from "@/shared/components/ui";

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	inputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	name: string;
	loading?: boolean;
	className?: string;
	selectedItems: Set<string>;
}

export const CheckboxGroup: FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	inputPlaceholder = "Find size...",
	loading,
	onClickCheckbox,
	defaultValue,
	selectedItems,
	className,
	name,
}) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const list = showAll
		? items.filter((item) =>
				item.text
					.toLowerCase()
					.includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit);

	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>

				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className="h-6 mb-3 rounded-sm" />
					))}
			</div>
		);
	}

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={inputPlaceholder}
						className="bg-gray-50 border-none"
						onChange={onChangeSearchInput}
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedItems?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{items.length > limit && (
					<div
						className={
							showAll ? "border-t border-t-neutral-100 mt-4" : ""
						}
					>
						<button
							onClick={() => {
								setSearchValue("");
								setShowAll(!showAll);
							}}
							className="text-primary mt-3"
						>
							{showAll ? "Hide" : "+ Show all"}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
