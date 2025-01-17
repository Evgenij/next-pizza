import { Wheel } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export const search = async (query: string): Promise<Wheel[]> => {
	return (
		await axiosInstance.get<Wheel[]>(ApiRoutes.SEARCH_WHEELS, {
			params: { query },
		})
	).data;
};
