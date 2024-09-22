import styled from 'styled-components';
import { HeaderButton } from '../atom';

export const HeaderCommands = () => {
	return (
		<SHeaderComands>
			<HeaderButton title="総人口" />
			<HeaderButton title="年少人口" />
			<HeaderButton title="生産年齢人口" />
			<HeaderButton title="老年人口" />
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
