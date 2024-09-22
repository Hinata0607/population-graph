'use client';
import { PrefectureResponseProps, UsePrefectureProps } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

// 都道府県に関連するコンテキストデータを扱うhooks
export const usePrefecture = (): UsePrefectureProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { prefecrtures, setPrefectures } = context;

	// 都道府県一覧を取得するAPIを実行する関数
	const handleFetchPrefectures = async (): Promise<void> => {
		const response =
			await axiosFetch.get<PrefectureResponseProps>('api/prefectures');
		console.log(response);
		setPrefectures(response.result);
	};

	return {
		prefecrtures,
		setPrefectures,

		handleFetchPrefectures,
	};
};
