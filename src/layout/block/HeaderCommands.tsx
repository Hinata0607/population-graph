'use client';
import styled from 'styled-components';
import { HeaderButton } from '../atom';
import { useGraph } from '@/hooks/context/useGraph';

export const HeaderCommands = () => {
	const { graphMode } = useGraph();

	return (
		<SHeaderComands>
			<HeaderButton selectedMode={graphMode} title="総人口" />
			<HeaderButton selectedMode={graphMode} title="年少人口" />
			<HeaderButton selectedMode={graphMode} title="生産年齢人口" />
			<HeaderButton selectedMode={graphMode} title="老年人口" />
		</SHeaderComands>
	);
};

const SHeaderComands = styled.section`
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 10px;
	flex-grow: 1;
	height: 100%;
`;
