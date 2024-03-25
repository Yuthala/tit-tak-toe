import { MOVE_ORDER, GAME_SYMBOLS } from './constants';
import { useState } from 'react';

//функция расчета состояния следующего хода на основании currentMove
function getNextMove(currentMove, playersCount) {

	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
	//если slicedMoveOrder[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять "крестик")
	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

//кастомный хук
export function useGameState(playersCount) {
//СОСТОЯНИЯ	
	//объединенное состояние: состояние игрового поля, состояние какой текущий ход 
	//начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента
	const [{cells, currentMove}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS
	}));

	//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.
	const nextMove = getNextMove(currentMove, playersCount);

	//обработчик клика по клетке (хода)
	const handleCellClick = (index) => {
		setGameState((lastGameState) => {

			if(lastGameState.cells[index]){
				return lastGameState;
			}

			return {
				...lastGameState,
				currentMove: getNextMove(lastGameState.currentMove, playersCount),
				cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell
			),
		};
		});
	};

	return{
		cells, 
		currentMove, 
		nextMove, 
		handleCellClick
	}
}