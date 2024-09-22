export interface themeProps {
	layout: {
		header: {
			bg: string;
			button: {
				bg: string;
			};
		};
		leftBar: {
			bg: string;
			line: string;
			item: {
				hoverBg: string;
				activeBg: string;
			};
		};
	};
	components: {
		prefectureArea: {
			bg: string;
		};
	};
	text: {
		main: string;
		sub: string;
	};
	bg: string;
}
