import * as actions from '../index'

describe('game actions', () => {
  it('tickSquare should create TICK_SQUARE action', () => {
    expect(actions.tickSquare(0)).toEqual({
      type: 'TICK_SQUARE',
      position: 0
    })
  })

  it('updateBoard should create UPDATE_BOARD action', () => {
    const board = [
      null, null, 'O',
      null, 'X', null,
      null, null, null
    ]

    expect(actions.updateBoard(board)).toEqual({
      type: 'UPDATE_BOARD',
      board
    })
  })

  it('addHistory should create ADD_HISTORY action', () => {
    expect(actions.addHistory(0)).toEqual({
      type: 'ADD_HISTORY',
      position: 0
    })
  })

  it('jumpTo should create JUMP_TO action', () => {
    expect(actions.jumpTo(0)).toEqual({
      type: 'JUMP_TO',
      step: 0
    })
  })
})