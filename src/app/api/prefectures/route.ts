import { PrefectureResponseProps } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextResponse } from 'next/server';

// RESASから都道府県一覧情報を取得するAPI
export const GET = async (): Promise<NextResponse> => {
	const url = `${process.env.RESAS_ENDPOINT}/api/v1/prefectures`;
	const response = await axiosFetch.get<PrefectureResponseProps>(url, {
		'X-API-KEY': process.env.RESAS_API_KEY || '',
	});
	return NextResponse.json(response);
};
