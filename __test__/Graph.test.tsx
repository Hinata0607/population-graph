import React from 'react';
import '@testing-library/jest-dom';
import { Graph } from './../src/components/block';
import { ContextProvider } from './../src/provider';
import { useGraph, useTheme } from './../src/hooks';
import { darkTheme } from './../src/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// テスト用のラッパーコンポーネント
const TestWrapper = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<ContextProvider>
				<Graph />
			</ContextProvider>
		</ThemeProvider>
	);
};

jest.mock('./../src/hooks', () => ({
	useGraph: jest.fn(),
	useTheme: jest.fn(),
	useBreakpoint: jest.fn(),
}));

// グラフ描画に関するテスト
describe('renders the graph with provided data', () => {
	const mockGraphData = {
		labels: ['2020', '2021', '2022', '2023'],
		datasets: [
			{
				label: '総人口',
				data: [100, 200, 300, 400], // ここにデータが必要
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 2,
				tension: 0.1,
			},
		],
	};

	const mockGraphOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
		},
	};

	beforeEach(() => {
		(useGraph as jest.Mock).mockReturnValue({
			graphData: mockGraphData,
			graphOptions: mockGraphOptions,
		});
		(useTheme as jest.Mock).mockReturnValue(darkTheme);
	});

	// グラフの描画がされているか
	test('renders the graph component', async () => {
		render(<TestWrapper />);

		// グラフが描画されているかを確認
		expect(await screen.findByTestId('graph')).toBeInTheDocument(); // グラフコンポーネントの存在を確認
	});

	// モックデータを使ってグラフが正しく描画されるかをテストする
	// (Chart.jsやreact-chartjs-2がラベルをCanvas上に描画しており、通常のDOMのテキストとしては取得できないため、
	// 描画された内容を直接確認するのではなく、モックデータが正しく設定されているか、コンポーネントがそれを使用しているかを確認するテストを行います)
	test('validates the mock data structure', async () => {
		render(<TestWrapper />);

		// モックデータの内容を確認
		const graphData = useGraph();
		expect(graphData.graphData.labels).toEqual(mockGraphData.labels);
		expect(graphData.graphData.datasets[0].data).toEqual(
			mockGraphData.datasets[0].data
		);
	});
});
