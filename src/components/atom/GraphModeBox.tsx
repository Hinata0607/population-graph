'use client';
import { useTheme } from '@/hooks';
import { useGraph } from '@/hooks/context/useGraph';
import { GraphModeBoxProps, SGraphModeBoxProps } from '@/interfaces';
import styled from 'styled-components';

export const GraphModeBox = ({ title, selectedMode }: GraphModeBoxProps) => {
	const { darkTheme } = useTheme();
	const { setGraphMode } = useGraph();
	const isSelected: boolean = selectedMode === title;

	return (
		<SGraphModeBox
			theme={darkTheme}
			$isSelected={isSelected}
			onClick={() => setGraphMode(title)}
		>
			{title}
		</SGraphModeBox>
	);
};

const SGraphModeBox = styled.button<SGraphModeBoxProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(50% - 10px);
	height: 50px;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	color: ${(props) =>
		props.$isSelected ? props.theme.text.main : props.theme.text.sub};
	background-color: ${(props) =>
		props.$isSelected
			? props.theme.primary
			: props.theme.layout.header.button.bg};
`;
