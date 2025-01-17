import Link from "next/link";
import React from "react";
import { Title } from "./Title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Wheel } from "@/interfaces/interfaces";

export const ProductCard: React.FC<Wheel> = ({
	id,
	name,
	price,
	imageUrl,
	diameters,
	className,
}) => {
	return (
		<div className={className}>
			<Link href={`/wheel/${id}`}>
				<div className="flex justify-center p-10 h-fit">
					<img className="object-contain" src={imageUrl} alt={name} />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

				<p className="text-sm text-gray-400">
					{diameters.map((diameter) => (
						<span key={diameter.id}>{diameter.name} / </span>
					))}
				</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-base">
						from <b>{price} PLN</b>
					</span>

					<Button variant="secondary" className="text-base font-bold">
						<Plus size={20} className="mr-1" />
						Add to cart
					</Button>
				</div>
			</Link>
		</div>
	);
};
