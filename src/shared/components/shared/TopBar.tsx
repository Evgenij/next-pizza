import React, { FC } from "react";
import { CarBrands } from "./CarBrands";
import { SortPopup } from "./SortPopup";
import { Container } from "./Container";
import { cn } from "@/shared/lib/utils";
import { CarBrand } from "@prisma/client";

interface Props {
	className?: string;
	carBrands: CarBrand[];
}

export const TopBar: FC<Props> = ({ className, carBrands }) => {
	return (
		<div
			className={cn(
				"sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 w-full",
				className
			)}
		>
			<Container className="flex items-center justify-between">
				<CarBrands items={carBrands} />
				<SortPopup />
			</Container>
		</div>
	);
};
