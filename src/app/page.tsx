import {
	Categories,
	Container,
	Filters,
	SortPopup,
	Title,
	TopBar,
} from "@/components/shared";

export default function Home() {
	const categories: string[] = [
		"Pizza",
		"Box",
		"Salads",
		"Drinks",
		"Cocktails",
		"Coffee",
		"Deserts",
	];

	return (
		<>
			<Container className="mt-8">
				<Title
					size="2xl"
					text="All products"
					className="font-extrabold"
				></Title>
			</Container>
			<TopBar categories={categories} />
			<Container className="pb-14 mt-10">
				<div className="flex gap-[60px]">
					<div className="flex w-[250px]">
						<Filters />
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{" "}
							Products list
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
