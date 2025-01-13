"use client";

import React, { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard } from "./ProductCard";
import { Title } from "./Title";
import { cn } from "@/lib/utils";
import { Wheel } from "@/interfaces/interfaces";
import { ICarBrand } from "@/types/types";
import { useCarBrandStore } from "@/store/carBrand";

interface Props {
	title: string;
	// items: ProductWithRelations[];
	// items: Wheel[];
	items: any[];
	brandId: number;
	className?: string;
	listClassName?: string;
}

export const ProductsGroupList: FC<Props> = ({
	title,
	items,
	listClassName,
	brandId,
	className,
}) => {
	// state
	const intersectionRef = useRef(null!);
	const setActiveCarBrand = useCarBrandStore((state) => state.setActiveID);

	// inner functions
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	// handlers
	const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {};

	// hooks
	useEffect(() => {
		if (intersection?.isIntersecting) {
			console.log(brandId);

			setActiveCarBrand(brandId);
		}
	}, [brandId, intersection?.isIntersecting, title]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div className={cn("grid grid-cols-3 gap-4", listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.image}
						price={product.price}
						diameters={product.diameters}
					/>
				))}
			</div>
		</div>
	);
};
