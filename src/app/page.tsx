import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared";
import { ICarBrand } from "@/types/types";

export default function Home() {
	const carBrands: ICarBrand[] = [
		{
			id: 1,
			name: "Volkswagen",
		},
		{
			id: 2,
			name: "Audi",
		},
		{
			id: 3,
			name: "BMW",
		},
		{
			id: 4,
			name: "Fiat",
		},
		{
			id: 5,
			name: "Mercedes",
		},
		{
			id: 6,
			name: "Mitsubishi",
		},
		{
			id: 7,
			name: "Opel",
		},
		{
			id: 8,
			name: "Seat",
		},
		{
			id: 9,
			name: "Skoda",
		},
		{
			id: 10,
			name: "Suzuki",
		},
	];

	return (
		<>
			<Container className="mt-8">
				<Title
					size="2xl"
					text="All wheels"
					className="font-extrabold"
				></Title>
			</Container>
			<TopBar carBrands={carBrands} />
			<Container className="pb-14 mt-10">
				<div className="flex gap-[60px]">
					<div className="flex w-[250px]">
						<Filters />
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-24">
							<ProductsGroupList
								title={carBrands[0].name}
								items={[
									{
										id: 1,
										name: "Force 340",
										price: 340,
										imageUrl:
											"https://static3.ladnefelgi.pl/hpeciai/7de48defbf93c146e512c5105a59160f/pol_pl_4x-Felgi-17-m-in-do-VW-Golf-V-VI-VII-Viii-T-Roc-Touran-Passat-B7-B8-B9-Tiguan-Caddy-5G0601025BF-5G0601025BE-93154_1.webp",
										diameters: ["15''", "16''", "17''"],
									},
									{
										id: 2,
										name: "Force 12-322",
										price: 543,
										imageUrl:
											"https://static1.ladnefelgi.pl/hpeciai/6a35fd3183a100bb0b255369b1d8edd9/pol_pl_4x-Felgi-18-m-in-do-CUPRA-Ateca-Born-Leon-VZ-VZx-Formentor-VZe-VZ-VZ5-SEAT-SKODA-I5572-81422_6.webp",
										diameters: ["17''", "18''", "19''"],
									},
								]}
								brandId={carBrands[0].id}
							/>
							<ProductsGroupList
								title={carBrands[1].name}
								items={[
									{
										id: 1,
										name: "Force 340",
										price: 340,
										imageUrl:
											"https://static3.ladnefelgi.pl/hpeciai/7de48defbf93c146e512c5105a59160f/pol_pl_4x-Felgi-17-m-in-do-VW-Golf-V-VI-VII-Viii-T-Roc-Touran-Passat-B7-B8-B9-Tiguan-Caddy-5G0601025BF-5G0601025BE-93154_1.webp",
										diameters: ["15''", "16''", "17''"],
									},
									{
										id: 2,
										name: "Force 12-322",
										price: 543,
										imageUrl:
											"https://static1.ladnefelgi.pl/hpeciai/6a35fd3183a100bb0b255369b1d8edd9/pol_pl_4x-Felgi-18-m-in-do-CUPRA-Ateca-Born-Leon-VZ-VZx-Formentor-VZe-VZ-VZ5-SEAT-SKODA-I5572-81422_6.webp",
										diameters: ["17''", "18''", "19''"],
									},
								]}
								brandId={carBrands[1].id}
							/>
							<ProductsGroupList
								title={carBrands[2].name}
								items={[
									{
										id: 1,
										name: "Force 340",
										price: 340,
										imageUrl:
											"https://static3.ladnefelgi.pl/hpeciai/7de48defbf93c146e512c5105a59160f/pol_pl_4x-Felgi-17-m-in-do-VW-Golf-V-VI-VII-Viii-T-Roc-Touran-Passat-B7-B8-B9-Tiguan-Caddy-5G0601025BF-5G0601025BE-93154_1.webp",
										diameters: ["15''", "16''", "17''"],
									},
									{
										id: 2,
										name: "Force 12-322",
										price: 543,
										imageUrl:
											"https://static1.ladnefelgi.pl/hpeciai/6a35fd3183a100bb0b255369b1d8edd9/pol_pl_4x-Felgi-18-m-in-do-CUPRA-Ateca-Born-Leon-VZ-VZx-Formentor-VZe-VZ-VZ5-SEAT-SKODA-I5572-81422_6.webp",
										diameters: ["17''", "18''", "19''"],
									},
								]}
								brandId={carBrands[2].id}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
