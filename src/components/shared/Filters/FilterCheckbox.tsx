"use client";
import { Checkbox } from "@/components/ui";
import { Diameter } from "@/types/types";
import React from "react";

export interface FilterCheckboxProps {
	text: string | Diameter;
	value: string;
	endAdornment?: React.ReactNode;
	onCheckedChange?: (checked: boolean) => void;
	checked?: boolean;
	name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name,
}) => {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className="rounded-[3px] w-6 h-6"
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className="leading-none cursor-pointer flex-1"
			>
				{text}
			</label>
			{endAdornment}
		</div>
	);
};
