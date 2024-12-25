import { Diameter } from "@/types/types";

export interface Wheel {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	diameters: Diameter[];
	className?: string;
}
