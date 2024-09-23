import { PrefectureProps } from '../api';
import { themeProps } from '../theme';
import { ContextGraphModeProps } from './ContextGraphModeProps';

export interface ContextProviderProps {
	prefecrtures: PrefectureProps[] | null;
	setPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;
	selectedPrefectures: PrefectureProps[] | null;
	setSelectedPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;
	graphMode: ContextGraphModeProps;
	setGraphMode: React.Dispatch<React.SetStateAction<ContextGraphModeProps>>;

	darkTheme: themeProps;
}
