'use client';
import { useTheme } from '@/hooks';
import { PrefectureBoxProps } from '@/interfaces';
import styled from 'styled-components';

export const PrefectureBox = ({
	title,
	prefCode,
	isSelected,
	onChange,
}: PrefectureBoxProps) => {
	const { darkTheme } = useTheme();

	return (
		<SPrefectureBox theme={darkTheme}>
			<input
				type="checkbox"
				id={prefCode.toString()}
				checked={isSelected}
				onChange={() => onChange()}
			/>
			<SLabel htmlFor={prefCode.toString()}>{title}</SLabel>
		</SPrefectureBox>
	);
};

const SPrefectureBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 33.3333%;
	height: 40px;
	padding: 0 10px;
	cursor: pointer;
	overflow: hidden;
	color: ${(props) => props.theme.text.sub};
`;

const SLabel = styled.label`
	lineheight: 40px;
	width: 100%;
	height: 100%;
	pointerevents: none;
`;
