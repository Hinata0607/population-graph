'use client';
import { Graph } from '@/components';
import { useFirstFetch } from '@/hooks';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function Home() {
	const { handleFirstFetch } = useFirstFetch();

	useEffect(() => {
		handleFirstFetch();
	}, []);

	return (
		<SPage>
			<Graph />
		</SPage>
	);
}

const SPage = styled.section`
	width: 100%;
	height: 100%;
`;
