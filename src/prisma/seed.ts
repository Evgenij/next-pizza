import { hashSync } from "bcrypt";
import { prisma } from "./prismaClient";
import { diameters } from "../types/constants";

async function up() {
	// users
	await prisma.user.createMany({
		data: [
			{
				name: "Alex",
				surname: "Washington",
				email: "alex.wash@gmail.com",
				password: hashSync("1234", 5),
			},
			{
				name: "Julia",
				surname: "Broken",
				email: "julia.wash@gmail.com",
				password: hashSync("4321", 5),
				role: "ADMIN",
			},
		],
	});

	//diameters
	await prisma.diameter.createMany({
		data: diameters,
	});

	//carBrands
	await prisma.carBrand.createMany({
		data: [
			{
				name: "Volkswagen",
			},
			{
				name: "Audi",
			},
			{
				name: "BMW",
			},
			{
				name: "Fiat",
			},
			{
				name: "Mercedes",
			},
			{
				name: "Mitsubishi",
			},
			{
				name: "Opel",
			},
			{
				name: "Seat",
			},
			{
				name: "Skoda",
			},
			{
				name: "Suzuki",
			},
		],
	});

	await prisma.wheel.create({
		data: {
			name: "YO-4200",
			color: "Gold",
			carBrandId: 1,
			price: 500,
			image: "/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png",
			diameters: {
				connect: diameters.slice(0, 5),
			},
		},
	});

	await prisma.wheel.create({
		data: {
			name: "BX-5400",
			color: "Gray",
			carBrandId: 2,
			price: 600,
			image: "/pictures/wheels/pol_pm_4x-Felgi-15-m-in-do-BMW-e21-e30-VW-Golf-I-II-III-GTI-Civic-Astra-HX025-L1879-67709_5.png",
			diameters: {
				connect: diameters.slice(3, 7),
			},
		},
	});

	await prisma.wheel.create({
		data: {
			name: "RX210",
			color: "Gray",
			carBrandId: 3,
			price: 900,
			image: "/pictures/wheels/pol_pm_4x-Felgi-16-17-m-in-do-SMART-Brabus-Forfour-II-Fortwo-III-FR762-80654_4.png",
			diameters: {
				connect: diameters.slice(4, 8),
			},
		},
	});

	await prisma.cart.createMany({
		data: [
			{ userId: 1, token: "sddsf", totalAmount: 0 },
			{ userId: 2, token: "dfbgf", totalAmount: 0 },
		],
	});

	await prisma.cartProduct.create({
		data: {
			cartId: 1,
			wheelId: 1,
			quantity: 2,
			diameters: {
				connect: [{ id: 1 }, { id: 2 }],
			},
		},
	});

	await prisma.cartProduct.create({
		data: {
			cartId: 1,
			wheelId: 2,
			quantity: 1,
			diameters: {
				connect: [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
			},
		},
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Wheel" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CarBrand" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Diameter" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartProduct" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.log(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
