'use client';
import { useTheme } from '@/hooks';
import { useGraph } from '@/hooks/context/useGraph';
import { HeaderButtonProps, SHeaderButtonProps } from '@/interfaces';
import styled from 'styled-components';

export const HeaderButton = ({ title, selectedMode }: HeaderButtonProps) => {
	const { darkTheme } = useTheme();
	const { setGraphMode } = useGraph();
	const isSelected: boolean = selectedMode === title;

	return (
		<SHeaderButton
			theme={darkTheme}
			$isSelected={isSelected}
			onClick={() => setGraphMode(title)}
		>
			{title}
		</SHeaderButton>
	);
};

const SHeaderButton = styled.button<SHeaderButtonProps>`
	height: 60%;
	padding: 0 20px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	color: ${(props) =>
		props.$isSelected ? props.theme.text.main : props.theme.text.sub};
	background-color: ${(props) =>
		props.$isSelected
			? props.theme.primary
			: props.theme.layout.header.button.bg};
`;
