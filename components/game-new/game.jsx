//композиционный компонент
import { GameLayout } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameTitle } from './ui/game-title';
import { GameInfo } from './ui/game-info';
import { PLAYERS } from './constants';
import { PlayerInfo } from './player-info';
import { GameMoveInfo} from './ui/game-move-info';
import { GameCell } from './ui/game-cell';
import { GAME_STATE_ACTIONS, useGameState } from './model/use-game-state';
import { GameOverModal } from './ui/game-over-modal';
import { useInterval } from '../lib/timers';

const PLAYERS_COUNT = 4;

initGameState

export function Game() {
    const [gameState, dispatch] = useReducer(
        gameStateReducer, 
        {playersCount: PLAYERS_COUNT, defaultTimer: 60000, currentMoveStart: Date.now()}, 
        initGameState
    );

    useInterval(1000, gameState.currentMoveStart, () => {
        dispatch({
            type: GAME_STATE_ACTIONS.TICK,
            now: Date.now()
        });
    });

    const winnerSequence = computeWinner(gameState);
	//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.
	const nextMove = getNextMove(gameState);
    const winnerSymbol = computeWinnerSymbol(gameState, {winnerSequence, nextMove});
    const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

    const { cells, currentMove} = gameState;

    return (
        <>
        <GameLayout 
            backLink={<BackLink />} 
            title={<GameTitle />} 
            gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 мин. на ход'} />} 
            playersList={
                PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
                    const {timer, timerStartAt} = computePlayerTimer(gameState, player.symbol);

                    return (
                    <PlayerInfo 
                        key={player.id}
                        avatar={player.avatar}
                        rating={player.rating}
                        name={player.name}
                        symbol={player.symbol}
                        isRight={index % 2 === 1}
                    />
                );
            })}
            gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove}/>}
            gameCells={cells.map((cell, index) => <GameCell 
                key={index}
                isWinner={winnerSequence?.includes(index)}
                disabled={!!winnerSymbol}
                onClick={() => {
                    dispatch({
                        type: GAME_STATE_ACTIONS.CELL_CLICK,
                        index,
                        now: Date.now()
                    });
                }}
                symbol={cell}
            />)}
        />
        <GameOverModal 
            winnerName={winnerPlayer?.name}
            players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
                    <PlayerInfo 
                    key={player.id}
                    avatar={player.avatar}
                    rating={player.rating}
                    name={player.name}
                    timer={timer}
                    symbol={player.symbol}
                    isRight={index % 2 === 1}
                    />
                ))
        }/>
    </>
    );
}