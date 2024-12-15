import React, { FC } from "react";
import { Categories } from "./Categories";
import { SortPopup } from "./SortPopup";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	categories: string[]; //Category[];
}

export const TopBar: FC<Props> = ({ className, categories }) => {
	return (
		<div
			className={cn(
				"sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 w-full",
				className
			)}
		>
			<Container className="flex items-center justify-between">
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	);
};
