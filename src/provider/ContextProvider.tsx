'use client';
import {
	ContextGraphModeProps,
	ContextProviderProps,
	PrefectureProps,
} from '@/interfaces';
import { darkTheme } from '@/theme';
import { ReactNode, createContext, useState } from 'react';

// アプリ全体で共有するコンテキストデータの定義
export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	// 全都道府県情報
	const [prefecrtures, setPrefectures] = useState<PrefectureProps[] | null>(
		null
	);
	// ユーザーにより選択された都道府県のリスト
	const [selectedPrefectures, setSelectedPrefectures] = useState<
		PrefectureProps[] | null
	>(null);
	// ユーザーにより選択されたグラフモード
	const [graphMode, setGraphMode] = useState<ContextGraphModeProps>('総人口');

	const contextValue = {
		prefecrtures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
		graphMode,
		setGraphMode,

		darkTheme,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
