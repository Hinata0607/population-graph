import { PrefectureProps } from '../api';

export interface UsePrefectureProps {
	prefecrtures: PrefectureProps[] | null;
	setPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;
	selectedPrefectures: PrefectureProps[] | null;
	setSelectedPrefectures: React.Dispatch<
		React.SetStateAction<PrefectureProps[] | null>
	>;

	handleFetchPrefectures: () => Promise<void>;
	handleSelectPrefectures: (prefecture: PrefectureProps) => void;
}
