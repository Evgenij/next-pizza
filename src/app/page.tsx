import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prismaClient";

export default async function Home() {
	// const carBrands: ICarBrand[] = [
	// 	{
	// 		id: 1,
	// 		name: "Volkswagen",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Audi",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "BMW",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Fiat",
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "Mercedes",
	// 	},
	// 	{
	// 		id: 6,
	// 		name: "Mitsubishi",
	// 	},
	// 	{
	// 		id: 7,
	// 		name: "Opel",
	// 	},
	// 	{
	// 		id: 8,
	// 		name: "Seat",
	// 	},
	// 	{
	// 		id: 9,
	// 		name: "Skoda",
	// 	},
	// 	{
	// 		id: 10,
	// 		name: "Suzuki",
	// 	},
	// ];

	const carBrands = await prisma.carBrand.findMany({
		include: {
			wheels: {
				include: { diameters: true },
			},
		},
	});

	return (
		<>
			<Container className="mt-8">
				<Title
					size="2xl"
					text="All wheels"
					className="font-extrabold"
				></Title>
			</Container>
			<TopBar
				carBrands={carBrands.filter(
					(carBrand) => carBrand.wheels.length > 0
				)}
			/>
			<Container className="pb-14 mt-10">
				<div className="flex gap-[60px]">
					<div className="flex w-[250px]">
						<Filters />
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-24">
							{carBrands.map(
								(carBrand) =>
									carBrand.wheels.length > 0 && (
										<ProductsGroupList
											key={carBrand.id}
											title={carBrand.name}
											items={carBrand.wheels}
											brandId={carBrand.id}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
