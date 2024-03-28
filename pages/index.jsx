import { GameTitle, GameInfo, GameField, useGameState } from '../components/game';
import { GameSymbol } from '../components/game/game-symbol';
import {Header} from '../components/header';
import {useState} from 'react';

export default function HomePage() {

	const [playersCount] = useState(4); //указать кол-во игроков 2 или 4 в начальном состоянии
	//хук, общий для game-info и game-field, венесен на уровень выше
	const {
		cells,
		currentMove,
		handleCellClick,
		nextMove,
		winnerSequence,
		handlePlayerTimeOver,
		winnerSymbol,
	} = useGameState(playersCount);

  return (
	<div className="bg-slate-50 min-h-screen">
		<Header />
		<main className="pt-6 mx-auto w-max">
			<GameTitle playersCount={playersCount}/>
			<GameInfo 
				playersCount={playersCount} 
				className="mt-4" 
				currentMove={currentMove}
          		isWinner={!!winnerSymbol}
          		onPlayerTimeOver={handlePlayerTimeOver}
			/>

			{winnerSymbol && (
			<div className="my-4">
				<GameSymbol symbol={winnerSymbol} />
			</div>
			)}

			<GameField 
				className="mt-6" 
				cells={cells} 
				currentMove={currentMove} 
				nextMove={nextMove}
				handleCellClick={handleCellClick}
				winnerSequence={winnerSequence}
				winnerSymbol={winnerSymbol}
			/>
		</main>
	</div>
  );
}
