'use client';
import { useMediaQuery } from 'react-responsive';

// レスポンシブデザインに対応するためのブレークポイントを扱うhooks
export const useBreakpoint = (): string => {
	const isXs: boolean = useMediaQuery({ maxWidth: 599.95 });
	const isSm: boolean = useMediaQuery({ minWidth: 600, maxWidth: 899 });
	const isMd: boolean = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
	const isLg: boolean = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });

	const breakpoint: string = isXs
		? 'xs'
		: isSm
			? 'sm'
			: isMd
				? 'md'
				: isLg
					? 'lg'
					: 'xl';

	return breakpoint;
};
