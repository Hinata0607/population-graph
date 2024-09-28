import { PrefectureResponseProps } from '@/interfaces';
import { axiosFetch } from '@/libs';

// RESASから都道府県一覧情報を取得するAPI
export const GET = async () => {
	const url = `${process.env.RESAS_ENDPOINT}/api/v1/prefectures`;
	const response = await axiosFetch.get<PrefectureResponseProps>(url, {
		'X-API-KEY': process.env.RESAS_API_KEY || '',
	});
	return response;
};
