import { GameTitle, GameInfo, GameField, useGameState } from '../components/game';
import { GameSymbol } from '../components/game/game-symbol';
import {Header} from '../components/header';
import {useState} from 'react';
import { UIModal } from '../components/uikit/ui-modal';
import { UiButton } from '../components/uikit/ui-button';

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
		<HomePageLayout header={<Header />}>
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

			<UIModal width="md" isOpen={winnerSymbol} onClose={() => console.log('close')}>
				<UIModal.Header>Игра завершена</UIModal.Header>
				<UIModal.Body>
					<div className="text-sm">
						Победитель: <span className="text-teal-600">User 1302</span>
					</div>
				</UIModal.Body>
				<UIModal.Footer>
					<UiButton size="md" variant="outline">Вернуться</UiButton>
					<UiButton size="md" variant="primary">Играть снова</UiButton>
				</UIModal.Footer>
			</UIModal>

			<GameField 
				className="mt-6" 
				cells={cells} 
				currentMove={currentMove} 
				nextMove={nextMove}
				handleCellClick={handleCellClick}
				winnerSequence={winnerSequence}
				winnerSymbol={winnerSymbol}
			/>
		</HomePageLayout>
  );
}

function HomePageLayout({header, children}) {
	return (
		<div className="bg-slate-50 min-h-screen">
			{header}
		<main className="pt-6 mx-auto w-max">{children}</main>
		</div>
	)
}
