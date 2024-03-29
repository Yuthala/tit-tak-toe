//файл для хранения переменных, которые переиспользуются разными компонентами

import avatarSrc1 from './ui/images/avatar-1.png';
import avatarSrc2 from './ui/images/avatar-2.png';
import avatarSrc3 from './ui/images/avatar-3.png';
import avatarSrc4 from './ui/images/avatar-4.png';

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

export const PLAYERS = [
	{
		id: 1,
		name: 'User 1505', 
		rating: '1230', 
		avatar: avatarSrc1, 
		symbol: GAME_SYMBOLS.CROSS
	},
		{
		id: 2,
		name: 'User 1645849680923460', 
		rating: '850', 
		avatar: avatarSrc2, 
		symbol: GAME_SYMBOLS.ZERO
	},
		{
		id: 3,
		name: 'User 2390', 
		rating: '56', 
		avatar: avatarSrc3, 
		symbol: GAME_SYMBOLS.TRIANGLE
	},
		{
		id: 4,
		name: 'User 1630', 
		rating: '2512', 
		avatar: avatarSrc4, 
		symbol: GAME_SYMBOLS.SQUARE
	}
];
