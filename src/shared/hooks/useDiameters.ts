import { Api } from "@/shared/services/apiClient";
import { Diameter } from "@prisma/client";
import { useEffect, useState } from "react";

type DiameterItem = Pick<Diameter, "id" | "name">;

interface ReturnProps {
	diameters: DiameterItem[];
	loading: boolean;
	selectedDiameters: Set<string>;
	onAddID: (id: string) => void;
}

export const useDiameters = () => {
	const [diameters, setDiameters] = useState<ReturnProps["diameters"]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getDiameters() {
			try {
				setLoading(true);
				const diameters = await Api.diameters.getAll();
				setDiameters(
					diameters.map((diameter) => ({
						id: diameter.id,
						name: diameter.name,
					}))
				);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		getDiameters();
	}, []);

	return { diameters, loading };
};
