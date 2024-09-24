import React from 'react';
import '@testing-library/jest-dom';
import { HeaderCommands } from './../src/layout/block';
import { ContextProvider } from './../src/provider';
import { useGraph } from './../src/hooks';
import { fireEvent, render, screen } from '@testing-library/react';

// テスト用のラッパーコンポーネント
const TestWrapper = () => {
	return (
		<ContextProvider>
			<HeaderCommands />
			<GraphModeDisplay />
		</ContextProvider>
	);
};

const GraphModeDisplay = () => {
	const { graphMode } = useGraph(); // useGraphをここで呼び出す
	return <div data-testid="graphMode">{graphMode}</div>; // graphModeを表示
};

// ヘッダーの4つのボタンに関するテスト
describe('Test Header Button Component', () => {
	// ヘッダーにボタンが4つ存在するかどうか
	test('render from with 4 buttons', async () => {
		render(<TestWrapper />);
		const buttons = await screen.findAllByRole('button');
		expect(buttons).toHaveLength(4);
	});

	// ヘッダーのボタンのタイトルが正しいかどうか
	test('render buttons with correct titles', async () => {
		render(<TestWrapper />);
		const buttonTitles = ['総人口', '年少人口', '生産年齢人口', '老年人口'];
		buttonTitles.forEach((title) => {
			expect(screen.getByRole('button', { name: title })).toBeInTheDocument();
		});
	});

	// stateの値(graphMode)の初期値が"総人口"であるかどうか
	test("should have initial graphMode value as '総人口'", async () => {
		render(<TestWrapper />);
		// テスト用コンポーネントからstateの値を持つ要素を取得
		const graphMode = screen.getByTestId('graphMode');
		// graphModeのテキストの期待される値を検証
		expect(graphMode.textContent).toBe('総人口');
	});

	// state(graphMode)の値が年少人口に正しく更新されるかどうか
	test("should update graphMode to '年少人口' when corresponding button is clicked", async () => {
		render(<TestWrapper />);
		// ボタンをクリック
		const button = screen.getByRole('button', { name: '年少人口' });
		fireEvent.click(button);
		// テスト用コンポーネントからstateの値を持つ要素を取得
		const graphMode = screen.getByTestId('graphMode');
		// graphModeの状態を取得
		expect(graphMode.textContent).toBe('年少人口');
	});

	// state(graphMode)の値が生産年齢人口に正しく更新されるかどうか
	test("should update graphMode to '生産年齢人口' when corresponding button is clicked", async () => {
		render(<TestWrapper />);
		// ボタンをクリック
		const button = screen.getByRole('button', { name: '生産年齢人口' });
		fireEvent.click(button);
		// テスト用コンポーネントからstateの値を持つ要素を取得
		const graphMode = screen.getByTestId('graphMode');
		// graphModeの状態を取得
		expect(graphMode.textContent).toBe('生産年齢人口');
	});

	// state(graphMode)の値が老年人口に正しく更新されるかどうか
	test("should update graphMode to '老年人口' when corresponding button is clicked", async () => {
		render(<TestWrapper />);
		// ボタンをクリック
		const button = screen.getByRole('button', { name: '老年人口' });
		fireEvent.click(button);
		// テスト用コンポーネントからstateの値を持つ要素を取得
		const graphMode = screen.getByTestId('graphMode');
		// graphModeの状態を取得
		expect(graphMode.textContent).toBe('老年人口');
	});
});
