'use client';
import { ChartOptions } from 'chart.js';
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

export const graphOptions: ChartOptions<'line'> = {
	responsive: true,
	aspectRatio: 2,
	maintainAspectRatio: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: `都道府県別 xxxxx`,
		},
	},
	scales: {
		x: {
			title: {
				display: true,
				text: '人口数',
			},
		},
		y: {
			title: {
				display: true,
				text: '年度',
			},
		},
	},
};

export const dummyData = {
	labels: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'],
	datasets: [
		{
			label: 'TEST',
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1,
		},
	],
};
