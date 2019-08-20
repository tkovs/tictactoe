import * as types from '../../actions/types'
import { createLogic } from 'redux-logic'
import {
  incrementStep,
  giveFeedback,
  clearFeedback,
  FeedbackCategories,
} from '../../actions'
import { calculateWinner } from '../../utils'

const tickSquareHistoryLogic = createLogic({
  type: types.TICK_SQUARE,
  validate({ getState, action }, allow, reject) {
    const history = getState().history
    const step = getState().step
    const squares = history[step].squares

    if (calculateWinner(squares)) {
      reject()
    }

    if (squares[action.payload.position]) {
      reject(
        giveFeedback(
          'Posição ocupada',
          FeedbackCategories.FAILURE
        )
      )
    }

    allow(action)
  },
  process({ getState, action }, dispatch, done) {
    dispatch(incrementStep())
    dispatch(clearFeedback())
    done()
  }
})

export default [
  tickSquareHistoryLogic
]