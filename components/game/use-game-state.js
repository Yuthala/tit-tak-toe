import { GAME_SYMBOLS } from './constants';
import { useState } from 'react';
import { computeWinner, getNextMove } from './model';

//кастомный хук
export function useGameState(playersCount) {
//СОСТОЯНИЯ	
	//объединенное состояние: состояние игрового поля, состояние какой текущий ход 
	//начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента
	const [{cells, currentMove, playersTimeOver}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
		playersTimeOver: []
	}));

	const winnerSequence = computeWinner(cells);
	//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.
	const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

	//обработчик клика по клетке (хода)
	const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
		  playersTimeOver,
          lastGameState.playersTimeOver
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell
        ),
      };
    });
  };

  //обработчик окончания времени хода игрока
 const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
		  playersTimeOver,
          lastGameState.playersTimeOver
        ),
      };
    });
  };

	return{
		cells, 
		currentMove, 
		nextMove, 
		handleCellClick, 
		handlePlayerTimeOver,
		winnerSequence
	}
}