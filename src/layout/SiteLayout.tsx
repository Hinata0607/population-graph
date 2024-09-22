'use client';
import { SChildrenProps, SiteLayoutProps, SMainProps } from '@/interfaces';
import styled from 'styled-components';
import { Header, LeftBar } from './section';
import { useBreakpoint, useTheme } from '@/hooks';

// サイトに適用するレイアウト
export const SiteLayout = ({ children }: SiteLayoutProps) => {
	const { darkTheme } = useTheme();
	const breakpoint = useBreakpoint();
	const isSm: boolean = ['xs', 'sm'].includes(breakpoint);

	return (
		<SLayout theme={darkTheme}>
			{!isSm && <LeftBar />}
			<SMain $isSm={isSm}>
				<Header />
				<SChildren $isSm={isSm}>{children}</SChildren>
			</SMain>
		</SLayout>
	);
};

const SLayout = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.theme.bg};
`;

const SMain = styled.main<SMainProps>`
	width: ${(props) => (props.$isSm ? '100%' : 'calc(100% - 300px)')};
	height: 100%;
`;

const SChildren = styled.section<SChildrenProps>`
	height: ${(props) => (props.$isSm ? '100%' : 'auto')};
	width: 100%;
`;
