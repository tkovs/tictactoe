import * as types from '../../actions/types'

export default function reducer(state = 0, action) {
  switch(action.type) {
    case types.INCREMENT_STEP:
      return state + 1
    case types.JUMP_TO:
      return action.payload
    default:
      return state
  }  
}