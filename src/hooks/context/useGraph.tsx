'use client';
import { useGraphProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

// グラフに関連するコンテキストデータを扱うhooks
export const useGraph = (): useGraphProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { graphMode, setGraphMode } = context;

	return {
		graphMode,
		setGraphMode,
	};
};
