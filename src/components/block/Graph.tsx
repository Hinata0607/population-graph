'use client';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { useBreakpoint, useTheme } from '@/hooks';
import styled from 'styled-components';
import { SGraphAreaProps } from '@/interfaces';
import { useGraph } from '@/hooks/context/useGraph';

export const Graph = () => {
	const { darkTheme } = useTheme();
	const breakpoint = useBreakpoint();
	const { graphData, graphOptions } = useGraph();

	// グラフライブラリに関する設定ファイル
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	return (
		<SGraphArea $breakpoint={breakpoint} theme={darkTheme}>
			<Line
				data-testid={`graph`}
				data={graphData}
				width="100%"
				height="100%"
				options={graphOptions}
			/>
		</SGraphArea>
	);
};

const SGraphArea = styled.div<SGraphAreaProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 90%;
	aspect-ratio: ${(props) =>
		['xs', 'sm'].includes(props.$breakpoint) ? '1/1' : '2/1'};
	background-color: #dad;
	border-radius: 10px;
	background-color: ${(props) => props.theme.components.prefectureArea.bg};
`;
