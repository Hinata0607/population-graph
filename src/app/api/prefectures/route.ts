import { axiosFetch } from '@/libs';
import { NextResponse } from 'next/server';

// RESASから都道府県一覧情報を取得するAPI
export const GET = async (): Promise<NextResponse> => {
	const response = await axiosFetch.get(
		`${process.env.RESAS_ENDPOINT}/api/v1/prefectures`,
		{
			'X-API-KEY': process.env.RESAS_API_KEY || '',
		}
	);
	return NextResponse.json(response);
};
