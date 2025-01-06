import { useEffect, useRef } from "react";
import { Filters } from "./useFilters";
import QueryString from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			const params = {
				from: filters.prices.from,
				to: filters.prices.to,
				diameters: Array.from(filters.diameters),
				colors: Array.from(filters.colors),
			};

			const query = QueryString.stringify(params, {
				arrayFormat: "comma",
			});
			router.push(`?${query}`, { scroll: false });
		}

		isMounted.current = true;
	}, [filters]);
};
