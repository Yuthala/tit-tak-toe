
import { GAME_SYMBOLS } from './constants';
import { CrossIcon } from '../game-new/ui/icons/cross-icon';
import { SquareIcon } from '../game-new/ui/icons/square-icon';
import { TriangleIcon } from '../game-new/ui/icons/triangle-icon';
import { ZeroIcon } from '../game-new/ui/icons/zero-icon';

//динамический выбор иконки (альтернатива if-else if else)
export function GameSymbol({symbol, className}) {

	const Icon = {
		[GAME_SYMBOLS.CROSS]: CrossIcon,
		[GAME_SYMBOLS.ZERO]: ZeroIcon,
		[GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
		[GAME_SYMBOLS.SQUARE]: SquareIcon
	}[symbol] ?? CrossIcon;//если символ не передан

	return <Icon className={className}/>;
}