'use client';
import { useTheme } from '@/hooks';
import styled from 'styled-components';
import { HeaderTitle } from '../atom';
import { HeaderCommands } from '../block';

export const Header = () => {
	const { darkTheme } = useTheme();

	return (
		<SHeader theme={darkTheme}>
			<HeaderTitle />
			<HeaderCommands />
		</SHeader>
	);
};

const SHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 15px;
	background-color: ${(props) => props.theme.layout.header.bg};
`;
