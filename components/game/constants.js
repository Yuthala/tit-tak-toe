//файл для хранения переменных, которые переиспользуются разными компонентами
//константа, в которой перечислены все возможные варианты значков игроков
export const GAME_SYMBOLS = {
	ZERO: 'zero',
	CROSS: 'cross',
	TRIANGLE: 'triangle',
	SQUARE: 'square'
}

//константа, в которой хранится порядок ходов
export const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE
]
