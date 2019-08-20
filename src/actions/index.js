import * as types from './types'

export const tickSquare = (position, step) => ({
  type: types.TICK_SQUARE,
  payload: {
    position,
    step
  }
})

export const incrementStep = () => ({
  type: types.INCREMENT_STEP
})

export const jumpTo = (step) => ({
  type: types.JUMP_TO, 
  payload: { 
    step 
  }
})

export const FeedbackCategories = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

export const giveFeedback = (feedback, category) => ({
  type: types.GIVE_FEEDBACK,
  payload: {
    feedback,
    category
  }
})

export const clearFeedback = () => ({
  type: types.CLEAR_FEEDBACK
})