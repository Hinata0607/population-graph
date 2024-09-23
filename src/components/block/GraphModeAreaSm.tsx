'use client';
import styled from 'styled-components';
import { GraphModeBox } from '../atom';
import { useGraph } from '@/hooks/context/useGraph';

export const GraphModeAreaSm = () => {
	const { graphMode } = useGraph();

	return (
		<SGraphModeAreaSm>
			<GraphModeBox selectedMode={graphMode} title="総人口" />
			<GraphModeBox selectedMode={graphMode} title="年少人口" />
			<GraphModeBox selectedMode={graphMode} title="生産年齢人口" />
			<GraphModeBox selectedMode={graphMode} title="老年人口" />
		</SGraphModeAreaSm>
	);
};

const SGraphModeAreaSm = styled.section`
	display: flex;
	justify-content: start;
	align-items: start;
	gap: 10px;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
`;
