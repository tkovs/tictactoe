export const TICK_SQUARE = 'TICK_SQUARE'
export const ADD_HISTORY = 'ADD_HISTORY'

export const tickSquare = (position) => ({
  type: TICK_SQUARE, position
})

export const addHistory = (position) => ({
  type: ADD_HISTORY, position
})