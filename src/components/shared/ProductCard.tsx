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
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 h-[260px]">
					<img
						className="w-[215px] h-[215px]"
						src={imageUrl}
						alt={name}
					/>
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

				<p className="text-sm text-gray-400">
					{diameters.map((value) => value).join(", ")}
				</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
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
