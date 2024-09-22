import { themeProps } from '@/interfaces';

// サイトのダークテーマ定義
export const darkTheme: themeProps = {
	layout: {
		header: {
			bg: '#121920',
			button: {
				bg: '#283848',
			},
		},
		leftBar: {
			bg: '#090c10',
			line: '#283848',
			item: {
				hoverBg: '#1f2b38',
			},
		},
	},
	text: {
		main: '#ffffff',
		sub: '#aaaaaa',
	},
	bg: '#121920',
};
