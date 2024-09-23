import { ContextGraphModeProps } from '@/interfaces/provider';
import { themeProps } from '@/interfaces/theme';

export interface GraphModeBoxProps {
	title: string;
	selectedMode: ContextGraphModeProps;
}

export interface SGraphModeBoxProps {
	theme: themeProps;
	$isSelected: boolean;
}
