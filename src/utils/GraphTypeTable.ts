import { ContextGraphModeProps } from '@/interfaces';

export const GraphTypeTable: Record<ContextGraphModeProps, number> = {
	総人口: 0,
	年少人口: 1,
	生産年齢人口: 2,
	老年人口: 3,
};

// 選択中のグラフタイプに対応するインデックスを返す関数
export const getGraphTypeIndex = (key: ContextGraphModeProps): number => {
	return GraphTypeTable[key];
};
