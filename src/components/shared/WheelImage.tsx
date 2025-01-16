import { cn } from "@/lib/utils";
import { Diameter } from "@prisma/client";
import React, { FC } from "react";

interface Props {
	className?: string;
	src: string;
	diameters: number;
	currentDiameter: number;
}

export const WheelImage: FC<Props> = ({
	className,
	src,
	diameters,
	currentDiameter,
}) => {
	// inner functions
	const someFunc = () => {};

	// handlers
	const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {};

	const startSize = 400;

	const generateSizes = () => {
		return new Array(diameters)
			.fill(0)
			.map((_, index) => startSize - index * 25);
	};
	const size = generateSizes()[currentDiameter - 1];

	return (
		<div
			className={cn(
				"flex items-center justify-center relative",
				`w-[${startSize}px] h-[${startSize}px]`,
				className
			)}
		>
			<img
				src={src}
				alt="Logo"
				style={{ height: `${size}px` }}
				className={cn("z-10 object-cover")}
			/>
		</div>
	);
};
