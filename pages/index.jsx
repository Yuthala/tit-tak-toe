import { GameTitle, GameInfo, GameField, useGameState } from '../components/game';
import {Header} from '../components/header';
import {useState} from 'react';

export default function HomePage() {

	const [playersCount] = useState(2);
	//хук, общий для game-info и game-field, венесен на уровень выше
	const {	cells, 
		currentMove, 
		nextMove, 
		handleCellClick,
		winnerSequence} = useGameState(playersCount);

  return (
	<div className="bg-slate-50 min-h-screen">
		<Header />
		<main className="pt-6 mx-auto w-max">
			<GameTitle playersCount={playersCount}/>
			<GameInfo 
				playersCount={playersCount} 
				className="mt-4" 
				currentMove={currentMove}
			/>
			<GameField 
				className="mt-6" 
				cells={cells} 
				currentMove={currentMove} 
				nextMove={nextMove}
				handleCellClick={handleCellClick}
				winnerSequence={winnerSequence}
			/>
		</main>
	</div>
  );
}
