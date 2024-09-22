'use client';
import { useTheme } from '@/hooks';
import styled from 'styled-components';

export const LeftBar = () => {
	const { darkTheme } = useTheme();

	return <SLeftBar theme={darkTheme}></SLeftBar>;
};

const SLeftBar = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	alignitems: center;
	width: 300px;
	height: 100%;
	border-right: solid 2px ${(props) => props.theme.layout.leftBar.line};
	border-radius: 0 20px 20px 0;
	background-color: ${(props) => props.theme.layout.leftBar.bg};
`;
