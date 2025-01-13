import { Diameter } from "@prisma/client";

export interface Wheel {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	diameters: Diameter[];
	className?: string;
}
