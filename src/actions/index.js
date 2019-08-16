export const TICK_SQUARE = 'TICK_SQUARE'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_HISTORY = 'ADD_HISTORY'
export const JUMP_TO = 'JUMP_TO'

export const tickSquare = (position) => ({
  type: TICK_SQUARE, position
})

export const updateBoard = (board) => ({
  type: UPDATE_BOARD, board
})

export const addHistory = (position) => ({
  type: ADD_HISTORY, position
})

export const jumpTo = (step) => ({
  type: JUMP_TO, step
})