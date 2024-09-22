'use client';
import { useTheme } from '@/hooks';
import { HeaderButtonProps } from '@/interfaces';
import styled from 'styled-components';

export const HeaderButton = ({ title }: HeaderButtonProps) => {
	const { darkTheme } = useTheme();

	return <SHeaderButton theme={darkTheme}>{title}</SHeaderButton>;
};

const SHeaderButton = styled.button`
	height: 60%;
	padding: 0 20px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	color: ${(props) => props.theme.text.sub};
	background-color: ${(props) => props.theme.layout.header.button.bg};
`;
