import { Filters } from "@/shared/components/shared";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useSet } from "react-use";

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

export interface Filters {
	diameters: Set<string>;
	colors: Set<string>;
	prices: PropsRange;
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PropsRange, value: number) => void;
	setDiameters: (key: string) => void;
	setColors: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	const [diameters, { toggle: toggleDiameters }] = useSet(
		new Set<string>(
			searchParams.get("diameters")
				? searchParams.get("diameters")?.split(",")
				: []
		)
	);

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

	const updatePrice = (name: keyof PropsRange, value: number) => {
		setPrices((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return useMemo(
		() => ({
			colors,
			diameters,
			prices,
			setPrices: updatePrice,
			setDiameters: toggleDiameters,
			setColors: toggleColors,
		}),
		[colors, diameters, prices]
	);
};
