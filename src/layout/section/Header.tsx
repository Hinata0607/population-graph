'use client';
import { useTheme } from '@/hooks';
import styled from 'styled-components';

export const Header = () => {
	const { darkTheme } = useTheme();

	return <SHeader theme={darkTheme}></SHeader>;
};

const SHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: ${(props) => props.theme.layout.header.bg};
`;
