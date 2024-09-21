'use client';
import { SiteLayoutProps } from '@/interfaces';
import styled from 'styled-components';
import { Header } from './section';

export const SiteLayout = ({ children }: SiteLayoutProps) => {
	return (
		<SLayout>
			<Header />
			{children}
		</SLayout>
	);
};

const SLayout = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #ada;
`;
