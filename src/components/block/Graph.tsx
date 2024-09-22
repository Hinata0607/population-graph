import { dummyData, graphOptions } from '@/libs';
import { Line } from 'react-chartjs-2';

export const Graph = () => {
	return (
		<Line data={dummyData} width="100%" height="100%" options={graphOptions} />
	);
};
