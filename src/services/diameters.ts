import { Diameter } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export const getAll = async (): Promise<Diameter[]> => {
	return (await axiosInstance.get<Diameter[]>(ApiRoutes.GET_DIAMETERS)).data;
};
