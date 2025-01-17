import { Diameter, Wheel } from "@prisma/client";

type CarBrand =
	| "Opel"
	| "Audi"
	| "Mercedes"
	| "BMW"
	| "Volkswagen"
	| "Fiat"
	| "Seat"
	| "Suzuki"
	| "Skoda"
	| "Mitsubishi";

export interface ICarBrand {
	id: number;
	name: CarBrand;
}

export type IWheelFullData = Wheel & { diameters: Diameter[] };
