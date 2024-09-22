'use client';
import { usePrefecture, useTheme } from '@/hooks';
import styled from 'styled-components';
import { PrefectureBox } from '../atom';

export const PrefectureSelectSm = () => {
	const { prefecrtures, selectedPrefectures, handleSelectPrefectures } =
		usePrefecture();
	const { darkTheme } = useTheme();

	return (
		<SPrefectureSelectSm theme={darkTheme}>
			{prefecrtures?.map((prefecrture) => (
				<PrefectureBox
					key={prefecrture.prefCode}
					title={prefecrture.prefName}
					prefCode={prefecrture.prefCode}
					isSelected={
						selectedPrefectures
							? selectedPrefectures.includes(prefecrture)
							: false
					}
					onChange={() => handleSelectPrefectures(prefecrture)}
				/>
			))}
		</SPrefectureSelectSm>
	);
};

const SPrefectureSelectSm = styled.section`
	display: flex;
	justify-content: start;
	align-items: start;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
	border-radius: 10px;
	background-color: ${(props) => props.theme.components.prefectureArea.bg};
`;
