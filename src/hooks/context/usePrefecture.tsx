'use client';
import {
	PrefectureProps,
	PrefectureResponseProps,
	UsePrefectureProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

// 都道府県に関連するコンテキストデータを扱うhooks
export const usePrefecture = (): UsePrefectureProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		prefecrtures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,
	} = context;

	// 都道府県一覧を取得するAPIを実行する関数
	const handleFetchPrefectures = async (): Promise<void> => {
		const response =
			await axiosFetch.get<PrefectureResponseProps>('api/prefectures');
		setPrefectures(response.result);
	};

	// ユーザーが都道府県を選択する関数
	const handleSelectPrefectures = (prefecture: PrefectureProps): void => {
		setSelectedPrefectures((prev) => {
			// prevがnullの場合は空の配列として扱う
			const currentSelected = prev || [];

			// すでに選択されている場合は取り出す
			if (currentSelected.some((p) => p.prefCode === prefecture.prefCode)) {
				return currentSelected.filter(
					(p) => p.prefCode !== prefecture.prefCode
				);
			} else {
				// 選択されていない場合は追加
				return [...currentSelected, prefecture];
			}
		});
	};

	return {
		prefecrtures,
		setPrefectures,
		selectedPrefectures,
		setSelectedPrefectures,

		handleFetchPrefectures,
		handleSelectPrefectures,
	};
};
