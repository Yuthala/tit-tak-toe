import clsx from 'clsx';
import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';
import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';

//константа, в которой хранится порядок ходов
const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE
]

//функция расчета состояния следующего хода на основании currentMove
function getNextMove(currentMove) {
	const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1
	//если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять "крестик")
	return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({className}) {
//СОСТОЯНИЯ
	//состояние игровго поля. отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента
	const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));

	//состояние какой текущий ход, начальное значение "крестик"
	const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);

	//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.
	const nextMove = getNextMove(currentMove);


	//переменная для GameMoveInfo (кнопки)
	const actions = 
	<>
		<UiButton size="md" variant="primary">Ничья</UiButton>
		<UiButton size="md" variant="outline">Сдаться</UiButton>
	</>

	return(
		<GameFieldLayout className={className}>
			<GameMoveInfo actions={actions} />

			<GameGrid>
				{cells.map((_, index) => (
					<GameCell key={index}>

					</GameCell>
				))}
			</GameGrid>
		</GameFieldLayout>
	);
}

//компонент для отображенияигрового поля
function GameFieldLayout({children, className}) {
	return (
		<div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7")}>
			{children}
		</div>
	);
}

//компонент отображения информации о ходах
function GameMoveInfo({actions, currentMove, nextMove}) {
	return (
		<div className="flex gap-3 items-center">
			<div className="mr-auto"> 
				<div className="flex items-center gap-1 text-xl leading-tight">Ход: <ZeroIcon className="w-5 h-5"/></div>
				<div className="flex items-center gap-1 text-xs leading-tight text-slate-400">Следующий: <CrossIcon /></div>
			</div>
			{actions}
		</div>
	);
}

//компонент, хранящий логику отображения значка
function GameSymbol({symbol}) {

}

//компонент отрисовки хода игры
function GameCell({children, i}) {
	return (
			<button 
				key={i} 
				className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
			>
				{children}
			</button>
	);
}


//компонент отрисовки решетки игрового поля
function GameGrid({children}) {
	return (
		<div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
			{children}
		</div>
	);
}
