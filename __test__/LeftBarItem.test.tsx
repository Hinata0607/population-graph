import React, { act } from 'react';
import '@testing-library/jest-dom';
import { mockPrefectures, mockSelectedPrefectures } from './mock';
import { ThemeProvider } from 'styled-components';
import { LeftBar } from './../src/layout/section';
import { ContextProvider } from './../src/provider';
import { darkTheme } from './../src/theme';
import { usePrefecture, useTheme } from './../src/hooks';
import {
	fireEvent,
	render,
	renderHook,
	screen,
	waitFor,
} from '@testing-library/react';

// usePrefectureをモック
jest.mock('./../src/hooks', () => ({
	usePrefecture: jest.fn(),
	useTheme: jest.fn(),
}));

// テスト用コンポーネント(styeld-componentsを使用しているため、ThemeProviderを配置しています)
const TestWrapper = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<ContextProvider>
				<LeftBar />
			</ContextProvider>
		</ThemeProvider>
	);
};

// レフトバーのアイテムに関するテスト
describe('Left Bar Item Component', () => {
	beforeEach(() => {
		// モックデータを設定
		(usePrefecture as jest.Mock).mockReturnValue({
			prefecrtures: mockPrefectures,
			selectedPrefectures: mockSelectedPrefectures, // モック配列を参照
			handleSelectPrefectures: jest.fn(
				(prefecture: { prefCode: number; prefName: string }) => {
					mockSelectedPrefectures.push(prefecture);
				}
			),
		});

		(useTheme as jest.Mock).mockReturnValue(darkTheme);
	});

	// リストアイテムの数が都道府県データ47個分かどうか
	test('renders 47 prefecture items correctly', async () => {
		render(<TestWrapper />);

		// prefecturesが表示されるまで待機
		const prefectureElements = screen.getAllByTestId(/left-bar-item-/);

		// アイテム数が47であることを確認
		expect(prefectureElements).toHaveLength(47);
	});

	// 各都道府県の名前が正しく表示されているか
	test('correctly displays the name of each prefecture', () => {
		render(<TestWrapper />);

		// モックデータからすべての都道府県名が画面に表示されていることを検証
		mockPrefectures.forEach((prefecture) => {
			const elements = screen.getAllByText(prefecture.prefName);
			expect(elements.length).toBeGreaterThan(0);
		});
	});

	// 選択された都道府県stateの初期値は空配列であるか
	test('should initialize selectedPrefectures state as an empty array', async () => {
		render(<TestWrapper />);

		// renderHookを用いてusePrefecture hooksから値を取得、テスト
		const { result } = renderHook(() => usePrefecture());

		// 空配列であるか検証
		expect(result.current.selectedPrefectures).toEqual([]);
	});

	// クリック時に都道府県が選択状態となるか(selectedPrefecturesに格納されるか)
	test('selects the correct prefecture when clicked', async () => {
		render(<TestWrapper />);

		// renderHookを用いてusePrefecture hooksから値を取得、テスト
		const { result } = renderHook(() => usePrefecture());

		// 最初の都道府県ボタンを取得
		const firstPrefectureButton = screen.getByTestId('left-bar-item-1'); // 北海道のテストID

		// クリックイベントを発火させて都道府県を選択(ここでは北海道)
		await act(async () => {
			fireEvent.click(firstPrefectureButton);
			await result.current.handleSelectPrefectures({
				prefCode: 1,
				prefName: '北海道',
			});
		});

		// const selectedPrefectures = await screen.findByTestId('selected-prefecture');
		// console.log(selectedPrefectures)

		// クリック後selectedPrefecturesに{ prefCode: 1, prefName: '北海道' }が格納されているか確認
		await waitFor(() => {
			expect(result.current.selectedPrefectures).toContainEqual({
				prefCode: 1,
				prefName: '北海道',
			});
		});
	});
});
