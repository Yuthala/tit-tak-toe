export function computePlayerTimer() {
    return {
        timer: gameState.timers[playerSymbol],
        timerStartAt: playerSymbol === gameState.currentMove 
            ? gameState.currentMoveStart 
            : undefined,
    };
}