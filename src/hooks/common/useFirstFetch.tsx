'use client';
import { useFirstFetchProps } from '@/interfaces';
import { usePrefecture } from '../context';

// データの初期取得に関する関数を扱うhooks
export const useFirstFetch = (): useFirstFetchProps => {
	const { handleFetchPrefectures } = usePrefecture();

	// 初回アクセス時のデータ取得関数
	const handleFirstFetch = async (): Promise<void> => {
		handleFetchPrefectures(); // 都道府県一覧の取得と保持。
	};

	return {
		handleFirstFetch,
	};
};
