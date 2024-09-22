'use client';
import { useTheme } from '@/hooks';
import styled from 'styled-components';

export const HeaderTitle = () => {
	const { darkTheme } = useTheme();

	return <SHeaderTitle theme={darkTheme}>population-graph</SHeaderTitle>;
};

const SHeaderTitle = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100%;
	color: ${(props) => props.theme.text.main};
`;
