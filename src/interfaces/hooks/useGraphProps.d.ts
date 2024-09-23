import { ChartOptions } from 'chart.js';
import { PopulationResponse } from '../api';

export interface useGraphProps {
	graphMode: ContextGraphModeProps;
	setGraphMode: React.Dispatch<React.SetStateAction<ContextGraphModeProps>>;
	population: { [key: number]: PopulationResponse };
	setPopulation: React.Dispatch<
		React.SetStateAction<{ [key: number]: PopulationResponse }>
	>;

	firstPopulation: PopulationResponse;
	text: string;
	labels: number[];
	datasets: () => DatasetProps[] | null;
	graphData: graphDataProps;
	graphOptions: ChartOptions<'line'>;

	handleFetchPopulation: (prefCode: number) => Promise<void>;
}

export interface DatasetProps {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
	tension: number;
}

export interface graphDataProps {
	labels: number[];
	datasets: DatasetProps[];
}
