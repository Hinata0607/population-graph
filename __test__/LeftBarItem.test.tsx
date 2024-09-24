import React from 'react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { LeftBar } from './../src/layout/section';
import { ContextProvider } from './../src/provider';
import { darkTheme } from './../src/theme';
import { usePrefecture, useTheme } from './../src/hooks';
import { render, screen } from '@testing-library/react';

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
				<SelectedPrefecturesDisplay />
			</ContextProvider>
		</ThemeProvider>
	);
};

// レフトバーのアイテムに関するテスト
const SelectedPrefecturesDisplay = () => {
	const { prefecrtures } = usePrefecture();
	return (
		<>
			<div data-testid="prefecrtures">
				{Array.isArray(prefecrtures) ? (
					prefecrtures.map((prefecture) => (
						<div key={prefecture.prefCode}>{prefecture.prefName}</div>
					))
				) : (
					<p>No prefectures available</p>
				)}
			</div>
		</>
	);
};

describe('Left Bar Item Component', () => {
	beforeEach(() => {
		// モックデータを設定
		(usePrefecture as jest.Mock).mockReturnValue({
			prefecrtures: Array.from({ length: 47 }, (_, index) => ({
				prefCode: index + 1,
				prefName: `Prefecture ${index + 1}`,
			})),
			selectedPrefectures: [],
			handleSelectPrefectures: jest.fn(),
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
		prefectureElements.forEach((item, index) => {
			expect(item).toHaveTextContent(`Prefecture ${index + 1}`);
		});
	});
});
