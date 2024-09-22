'use client';
import { Graph, PrefectureSelectSm } from '@/components';
import { useBreakpoint, useFirstFetch } from '@/hooks';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function Home() {
	const { handleFirstFetch } = useFirstFetch();
	const breakpoint = useBreakpoint();
	const isSm: boolean = ['xs', 'sm'].includes(breakpoint);

	useEffect(() => {
		handleFirstFetch();
	}, []); // eslint-disable-line

	return (
		<SPage>
			{isSm && <PrefectureSelectSm />}
			<Graph />
		</SPage>
	);
}

const SPage = styled.section`
	width: 100%;
	height: 100%;
`;
