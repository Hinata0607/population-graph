export interface PrefectureResponseProps {
	message: string | null;
	result: PrefectureProps[];
}

export interface PrefectureProps {
	prefCode: number;
	prefName: string;
}
