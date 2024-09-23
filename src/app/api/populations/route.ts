import { PopulationResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	const prefCode = searchParams.get('prefCode');
	const url = `${process.env.RESAS_ENDPOINT}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
	const response = NextResponse.json(
		await axiosFetch.get<PopulationResponse>(url, {
			'X-API-KEY': process.env.RESAS_API_KEY || '',
		})
	);
	return response;
};
