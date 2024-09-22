'use client';
import { useBreakpoint, useTheme } from '@/hooks';
import styled from 'styled-components';
import { HeaderTitle } from '../atom';
import { HeaderCommands } from '../block';
import { SHeaderProps } from '@/interfaces';

export const Header = () => {
	const { darkTheme } = useTheme();
	const breakpoint = useBreakpoint();
	const isSm: boolean = ['xs', 'sm'].includes(breakpoint);

	return (
		<SHeader theme={darkTheme} $isSm={isSm}>
			<HeaderTitle />
			{!isSm && <HeaderCommands />}
		</SHeader>
	);
};

const SHeader = styled.header<SHeaderProps>`
	display: flex;
	justify-content: ${(props) => (props.$isSm ? 'center' : 'space-between')};
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 15px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: ${(props) => props.theme.layout.header.bg};
`;
