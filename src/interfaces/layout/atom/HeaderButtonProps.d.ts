import { themeProps } from '@/interfaces/theme';

export interface HeaderButtonProps {
	title: string;
	selectedMode: string;
}

export interface SHeaderButtonProps {
	$isSelected: boolean;
	theme: themeProps;
}
