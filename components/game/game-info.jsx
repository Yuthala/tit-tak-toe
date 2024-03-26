import clsx from 'clsx';
import { Profile} from '../profile';
import {useState, useEffect} from 'react';
import { CrossIcon } from './icons/cross-icon';
import { GameSymbol } from './game-symbol';
import { GAME_SYMBOLS } from './constants';
import avatarSrc1 from './images/avatar-1.png';
import avatarSrc2 from './images/avatar-2.png';
import avatarSrc3 from './images/avatar-3.png';
import avatarSrc4 from './images/avatar-4.png';
 
const players = [
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

export function GameInfo({className, playersCount, currentMove}) {
	return(
		<div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-12")}>

			{players.slice(0, playersCount).map((player, index) => (
				<PlayerInfo 
					key={player.id}
					playerInfo={player}
					isRight={index % 2 === 1}
					isTimerRunning={currentMove === player.symbol}
				/>
			))}


		</div>
	);
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
	//состояние таймера
	const [seconds, setSeconds] = useState(60);
	//строковое представление минут
	const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
	//строковое представление секунд
	const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

	//флаг окончания времени на ход (осталось <10 сек)
	const isDanger = seconds < 10;

	//таймер
	useEffect(() => {
		if (isTimerRunning) {
			const interval = setInterval(() => {
			//когда s-1 станет равным 0, состояние компоненты перестанет меняться, и перерисовка useState перестанет происходить
			setSeconds((s) => Math.max(s - 1, 0));
			}, 1000)

			return () => {
				clearInterval(interval);
				setSeconds(60);
			}
		}
	}, [isTimerRunning])

	//функция изменения цвета таймера
	const getTimerColor = () => {
		if (isTimerRunning) {
			return isDanger ? "text-orange-600" : "text-slate-900";
		}
		return "text-slate-200";
	};

	return (
			<div className="flex gap-3 items-center">
				<div className={clsx("relative", isRight && "order-3")}>
					<Profile 
						className="w-44"
						name={playerInfo.name} 
						rating={playerInfo.rating} 
						avatar={playerInfo.avatar}
					/>
					<div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
						<GameSymbol symbol={playerInfo.symbol} />
					</div>
				</div>
				<div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
				<div className={clsx("text-lg font-semibold w-[60px]", isRight && "order-1", getTimerColor())}>
					{minutesString}:{secondsString}
				</div>
			</div>
	)
}