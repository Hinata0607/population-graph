'use client';
import { ContextProviderProps, PrefectureProps } from '@/interfaces';
import { darkTheme } from '@/theme';
import { ReactNode, createContext, useState } from 'react';

// アプリ全体で共有するコンテキストデータの定義
export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [prefecrtures, setPrefectures] = useState<PrefectureProps[] | null>(
		null
	);

	const contextValue = {
		prefecrtures,
		setPrefectures,

		darkTheme,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
