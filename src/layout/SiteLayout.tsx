'use client';
import { SiteLayoutProps } from '@/interfaces';
import styled from 'styled-components';
import { Header, LeftBar } from './section';
import { useTheme } from '@/hooks';

// サイトに適用するレイアウト
export const SiteLayout = ({ children }: SiteLayoutProps) => {
	const { darkTheme } = useTheme();

	return (
		<SLayout theme={darkTheme}>
			<LeftBar />
			<SMain>
				<Header />
				<SChildren>{children}</SChildren>
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

const SMain = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	height: 100%;
`;

const SChildren = styled.section`
	flex-grow: 1;
	width: 100%;
`;
