import { themeProps } from '@/interfaces/theme';

export interface LeftBarItemProps {
	prefName: string;
	isSelected: boolean;
	onClick: () => void;
}

export interface SLeftBarItemProps {
	$isSelected: boolean;
	theme: themeProps;
}
