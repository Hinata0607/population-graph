'use client';
import { useThemeProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useTheme = (): useThemeProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { darkTheme } = context;

	return {
		darkTheme,
	};
};
