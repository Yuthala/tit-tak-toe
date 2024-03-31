import { MOVE_ORDER } from '../constants';

//функция расчета состояния следующего хода на основании currentMove
export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol)
  );

	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
	//если slicedMoveOrder[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять "крестик")
	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}