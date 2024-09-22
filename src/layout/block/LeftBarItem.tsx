'use client';
import { useTheme } from '@/hooks';
import { LeftBarItemProps } from '@/interfaces';
import styled from 'styled-components';

export const LeftBarItem = ({ prefName, onClick }: LeftBarItemProps) => {
	const { darkTheme } = useTheme();

	return (
		<SLeftBarItem theme={darkTheme} onClick={() => onClick()}>
			{prefName}
		</SLeftBarItem>
	);
};

const SLeftBarItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;
	flex-shrink: 0;
	border-radius: 0 10px 10px 0;
	cursor: pointer;
	color: ${(props) => props.theme.text.main};

	&:hover {
		background-color: ${(props) => props.theme.layout.leftBar.item.hoverBg};
	}
`;
