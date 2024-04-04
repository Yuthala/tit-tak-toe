export function computePlayerTimer() {
    return {
        timer: gameState.timers[playerSymbol],
        timerStartAt: player.symbol === gameState.currentMove 
            ? gameState.currentMoveStart 
            : undefined,
    };
}