import type { Metadata } from 'next';
import './globals.css';
import { SiteLayout } from '@/layout';

export const metadata: Metadata = {
	title: 'population-graph',
	description:
		'都道府県別の総人口推移グラフを表示するSPA(Single Page Application)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="jp">
			<body>
				<SiteLayout>{children}</SiteLayout>
			</body>
		</html>
	);
}
