'use client';
import { Graph, GraphModeAreaSm, PrefectureSelectSm } from '@/components';
import { useBreakpoint, useFirstFetch } from '@/hooks';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function Home() {
	const breakpoint = useBreakpoint();
	const isSm: boolean = ['xs', 'sm'].includes(breakpoint);
	const { handleFirstFetch } = useFirstFetch();

	useEffect(() => {
		handleFirstFetch();
	}, []); // eslint-disable-line

	return (
		<SPage>
			{isSm && <PrefectureSelectSm />}
			<Graph />
			{isSm && <GraphModeAreaSm />}
		</SPage>
	);
}

const SPage = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 30px;
	width: 100%;
	max-width: 1500px;
	padding: 30px 0;
	margin: 0 auto;
`;
