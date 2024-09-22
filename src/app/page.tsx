'use client';

import { useFirstFetch } from '@/hooks';
import { useEffect } from 'react';

export default function Home() {
	const { handleFirstFetch } = useFirstFetch();

	useEffect(() => {
		handleFirstFetch();
	}, []);

	return <>hello world</>;
}
