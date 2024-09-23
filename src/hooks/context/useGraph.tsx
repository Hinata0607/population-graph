'use client';
import { DatasetProps, PopulationResponse, useGraphProps } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { getGraphTypeIndex, prefectureColors } from '@/utils';
import { ChartOptions } from 'chart.js';
import { useContext } from 'react';
import { useBreakpoint } from '../common';

// グラフに関連するコンテキストデータを扱うhooks
export const useGraph = (): useGraphProps => {
	const breakpoint = useBreakpoint();
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		selectedPrefectures,
		graphMode,
		setGraphMode,
		population,
		setPopulation,
	} = context;

	// 都道府県別の総人口や年少人口などの人口推移率のデータを取得する関数
	const handleFetchPopulation = async (prefCode: number): Promise<void> => {
		if (population[prefCode]) {
			// すでに都道府県の人口推移率データが存在する場合は何もしない
			return;
		} else {
			// 存在しない場合は新たに追加
			const response = await axiosFetch.get<PopulationResponse>(
				`api/populations?prefCode=${prefCode}`
			);
			setPopulation((prev) => {
				return {
					...prev,
					[prefCode]: response, // prefCode をキーとしてオブジェクトに追加(重複防止でもあります)
				};
			});
		}
		// 一度フェッチした都道府県のデータは格納しておき、以降フェッチしないようにします。
		// 実際にその都道府県のデータをグラフに描画するかにつきましては別のstate(都道府県の選択状態)に依存することといたします。
	};

	// 各種グラフの設定
	const firstPopulation = Object.values(population)[0];
	const text: string = firstPopulation
		? `都道府県別 ${firstPopulation?.result.data[getGraphTypeIndex(graphMode)]?.label}`
		: '';

	const labels: number[] = firstPopulation
		? firstPopulation.result.data[getGraphTypeIndex(graphMode)].data.map(
				(item) => item.year
			)
		: []; // firstPopulationからラベル用の年を取得

	// グラフに描画するデータの設定
	const datasets = (): DatasetProps[] | null => {
		return selectedPrefectures
			?.map(({ prefName, prefCode }) => {
				const populationData = population[prefCode];

				// populationDataが存在した場合
				if (populationData) {
					const prefectureColor = prefectureColors[prefName];
					return {
						label: prefName,
						data: populationData.result.data[
							getGraphTypeIndex(graphMode)
						].data.map((item) => item.value),
						borderColor: prefectureColor,
						backgroundColor: prefectureColor,
						tension: 0.1,
					};
				}
				// populationDataが存在しない場合は何も返さない
				return null;
			})
			.filter(Boolean) as DatasetProps[]; // nullを取り除く
	};

	// 最終的なグラフに渡すデータ
	const graphData = {
		labels: labels,
		datasets: datasets() || [],
	};

	// グラフのオプション
	const graphOptions: ChartOptions<'line'> = {
		responsive: true,
		aspectRatio: ['xs', 'sm'].includes(breakpoint) ? 1 : 2,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: text,
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

	return {
		graphMode,
		setGraphMode,
		population,
		setPopulation,

		firstPopulation,
		text,
		labels,
		datasets,
		graphData,
		graphOptions,

		handleFetchPopulation,
	};
};
