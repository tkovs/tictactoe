import * as types from '../../actions/types'
import { createLogic } from 'redux-logic'
import { incrementStep } from '../../actions'
import { calculateWinner } from '../../utils'

const tickSquareHistoryLogic = createLogic({
  type: types.TICK_SQUARE,
  validate({ getState, action }, allow, reject) {
    const history = getState().history
    const step = getState().step
    const squares = history[step].squares

    if (squares[action.payload.position]) {
      reject()
    }

    if (calculateWinner(squares)) {
      reject()
    }

    allow(action)
  },
  process({ getState, action }, dispatch, done) {
    dispatch(incrementStep())
    done()
  }
})

export default [
  tickSquareHistoryLogic
]