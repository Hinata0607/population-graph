import { themeProps } from '@/interfaces/theme';

export interface LeftBarItemProps {
	'data-testid'?: string;
	prefName: string;
	isSelected: boolean;
	onClick: () => void;
}

export interface SLeftBarItemProps {
	$isSelected: boolean;
	theme: themeProps;
}
