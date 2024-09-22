import { PrefectureProps } from '../api';
import { themeProps } from '../theme';

export interface ContextProviderProps {
	prefecrtures: PrefectureProps[] | null;
	setPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;
	selectedPrefectures: PrefectureProps[] | null;
	setSelectedPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;

	darkTheme: themeProps;
}
