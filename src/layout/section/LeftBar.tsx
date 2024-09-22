'use client';
import { usePrefecture, useTheme } from '@/hooks';
import styled from 'styled-components';
import { LeftBarItem } from '../block';

export const LeftBar = () => {
	const { darkTheme } = useTheme();
	const { prefecrtures, handleSelectPrefectures } = usePrefecture();

	return (
		<SLeftBar theme={darkTheme}>
			{prefecrtures?.map((prefecrtures) => (
				<LeftBarItem
					key={prefecrtures.prefCode}
					prefName={prefecrtures.prefName}
					onClick={() => handleSelectPrefectures(prefecrtures)}
				/>
			))}
		</SLeftBar>
	);
};

const SLeftBar = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: 300px;
	height: 100%;
	padding: 15px 0;
	border-right: solid 2px ${(props) => props.theme.layout.leftBar.line};
	border-radius: 0 20px 20px 0;
	background-color: ${(props) => props.theme.layout.leftBar.bg};
	overflow-x: hidden;
	overflow-y: overlay;

	&::-webkit-scrollbar-thumb {
		display: none;
	}
	&:hover {
		&::-webkit-scrollbar-thumb {
			display: block;
		}
	}
`;
