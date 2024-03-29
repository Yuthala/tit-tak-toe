import { GameLayout } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameTitle } from './ui/game-title';
import { GameInfo } from './ui/game-info';
import { PLAYERS } from './constants';
import { PlayerInfo } from './player-info';

export function Game() {
    return (
        <GameLayout 
            backLink={<BackLink />} 
            title={<GameTitle />} 
            gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />} 
            playersList={
                PLAYERS.map((player, index) => (
                    <PlayerInfo 
                    key={player.id}
                    avatar={player.avatar}
                    rating={player.rating}
                    name={player.name}
                    seconds={60}
                    symbol={player.symbol}
                    isRight={index % 2 ===1}
                    />
                ))}
        />
    );
}