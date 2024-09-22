'use client';
import { useTheme } from '@/hooks';
import { LeftBarItemProps, SLeftBarItemProps } from '@/interfaces';
import styled from 'styled-components';

export const LeftBarItem = ({
	prefName,
	isSelected,
	onClick,
}: LeftBarItemProps) => {
	const { darkTheme } = useTheme();

	return (
		<SLeftBarItem
			theme={darkTheme}
			$isSelected={isSelected}
			onClick={() => onClick()}
		>
			{prefName}
		</SLeftBarItem>
	);
};

const SLeftBarItem = styled.div<SLeftBarItemProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;
	flex-shrink: 0;
	border-radius: 0 10px 10px 0;
	cursor: pointer;
	color: ${(props) => props.theme.text.main};
	background-color: ${(props) =>
		props.$isSelected
			? props.theme.layout.leftBar.item.activeBg
			: 'transparent'};

	&:hover {
		background-color: ${(props) =>
			props.$isSelected
				? props.theme.layout.leftBar.item.activeBg
				: props.theme.layout.leftBar.item.hoverBg};
	}
`;
