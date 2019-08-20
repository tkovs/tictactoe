import * as types from '../../actions/types'

export default function reducer(
  state = {
    feedback: null,
    category: null
  },
  action
) {
  switch(action.type) {
    case types.GIVE_FEEDBACK:
      return {
        feedback: action.payload.feedback,
        category: action.payload.category
      }
    case types.CLEAR_FEEDBACK:
      return {
        feedback: null,
        category: null
      }
    default:
      return state
  }
}