import * as types from './types'

export const tickSquare = (position) => ({
  type: types.TICK_SQUARE, position
})

export const updateBoard = (board) => ({
  type: types.UPDATE_BOARD, board
})

export const addHistory = (position) => ({
  type: types.ADD_HISTORY, position
})

export const jumpTo = (step) => ({
  type: types.JUMP_TO, step
})