'use client';
import { SiteLayoutProps } from '@/interfaces';
import styled from 'styled-components';
import { Header, LeftBar } from './section';

export const SiteLayout = ({ children }: SiteLayoutProps) => {
	return (
		<SLayout>
			<Header />
			<SMain>
				<LeftBar />
				<SChildren>{children}</SChildren>
			</SMain>
		</SLayout>
	);
};

const SLayout = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #ada;
`;

const SMain = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	width: 100%;
`;

const SChildren = styled.section`
	flex-grow: 1;
	height: 100%;
	background-color: #ddd;
`;
