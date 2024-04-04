

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cell-click'
}

//кастомный хук
export const gameStateReducer = (state, action) => {
  switch(action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const {index} = action;
        if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.playersTimeOver
        ),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell
        ),
      };
    }
    default: {
      return state;
    }
  }
  return state;
};

export const initGameState = ({
  playersCount
}) => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount
});