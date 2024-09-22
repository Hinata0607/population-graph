'use client';
import { ContextProviderProps } from '@/interfaces';
import { darkTheme } from '@/theme';
import { ReactNode, createContext } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const contextValue = {
		darkTheme,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
