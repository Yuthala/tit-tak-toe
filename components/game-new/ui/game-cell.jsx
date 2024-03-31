import { GameSymbol } from "./game-symbol";

//компонент отрисовки хода игры
export function GameCell({onClick, isWinner, disabled, symbol}) {
	return (
			<button 
				disabled={disabled}
				onClick={onClick}
				className={clsx("border border-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner  && "bg-orange-600/10")}
			>
                {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
			</button>
	);
}