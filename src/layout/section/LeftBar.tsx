'use client';
import { usePrefecture, useTheme } from '@/hooks';
import styled from 'styled-components';

export const LeftBar = () => {
	const { darkTheme } = useTheme();
	const { prefecrtures } = usePrefecture();

	return (
		<SLeftBar theme={darkTheme}>
			{prefecrtures?.map((prefecrtures) => (
				<div key={prefecrtures.prefCode}>{prefecrtures.prefName}</div>
			))}
		</SLeftBar>
	);
};

const SLeftBar = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	alignitems: center;
	width: 300px;
	height: 100%;
	border-right: solid 2px ${(props) => props.theme.layout.leftBar.line};
	border-radius: 0 20px 20px 0;
	background-color: ${(props) => props.theme.layout.leftBar.bg};
`;
