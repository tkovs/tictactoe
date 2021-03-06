import * as actions from '../index'
import * as types from '../types'

describe('game actions', () => {
  it('tickSquare should create TICK_SQUARE action', () => {
    expect(actions.tickSquare(0, 0)).toEqual({
      type: types.TICK_SQUARE,
      payload: {
        position: 0,
        step: 0
      }
    })
  })

  it('incrementStep should create INCREMENT_STEP action', () => {
    expect(actions.incrementStep()).toEqual({
      type: types.INCREMENT_STEP,
    })
  })

  it('clearFeedback should create CLEAR_FEEDBACK action', () => {
    expect(actions.clearFeedback()).toEqual({
      type: types.CLEAR_FEEDBACK,
    })
  })

  it('jumpTo should create JUMP_TO action', () => {
    expect(actions.jumpTo(1)).toEqual({
      type: types.JUMP_TO,
      payload: {
        step: 1
      }
    })
  })

  it('giveFeedback should create GIVE_FEEDBACK action', () => {
    expect(
      actions.giveFeedback(
        'Posição ocupada',
        actions.FeedbackCategories.FAILURE
      )
    ).toEqual({
      type: types.GIVE_FEEDBACK,
      payload: {
        feedback: 'Posição ocupada',
        category: actions.FeedbackCategories.FAILURE
      }
    })
  })
})