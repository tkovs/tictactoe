import feedback from '../feedback'
import * as types from '../../../actions/types'
import { FeedbackCategories } from '../../../actions'

describe('feedback reducer', () => {
  it('should handle initial state', () => {
    expect(
      feedback(undefined, {})
    ).toEqual({
      feedback: null,
      category: null
    })
  })

  it('should handle GIVE_FEEDBACK', () => {
    expect(
      feedback(undefined, {
        type: types.GIVE_FEEDBACK,
        payload: {
          feedback: 'Posição ocupada',
          category: FeedbackCategories.FAILURE
        }
      })
    ).toEqual({
      feedback: 'Posição ocupada',
      category: FeedbackCategories.FAILURE
    })

    expect(
      feedback({
        feedback: 'Feedback qualquer',
        category: FeedbackCategories.SUCCESS
      }, {
        type: types.GIVE_FEEDBACK,
        payload: {
          feedback: 'Posição ocupada',
          category: FeedbackCategories.FAILURE
        }
      })
    ).toEqual({
      feedback: 'Posição ocupada',
      category: FeedbackCategories.FAILURE
    })
  })

  it('should handle CLEAR_FEEDBACK', () => {
    expect(
      feedback(undefined, {
        type: types.CLEAR_FEEDBACK,
      })
    ).toEqual({
      feedback: null,
      category: null
    })

    expect(
      feedback({
        feedback: 'Feedback qualquer',
        category: FeedbackCategories.SUCCESS
      }, {
        type: types.CLEAR_FEEDBACK,
      })
    ).toEqual({
      feedback: null,
      category: null
    })
  })
})