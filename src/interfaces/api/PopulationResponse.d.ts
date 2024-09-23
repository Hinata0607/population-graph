export interface PopulationResponse {
	message: string | null;
	result: {
		boundaryYear: number;
		data: PopulationCategoryProps[];
	};
}

export interface PopulationCategoryProps {
	label: string;
	data: PopulationYearDataProps[];
}

export interface PopulationYearDataProps {
	year: number;
	value: number;
	rate?: number;
}
