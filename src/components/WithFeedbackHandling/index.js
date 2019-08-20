import React from 'react'
import './index.css'
import { FeedbackCategories } from '../../actions'

// IMPLEMENTAR CORES NO FEEDBACK

const WithFeedbackHandling = WrappedComponent => ({showFeedback, feedback, category, children}) => (
  <WrappedComponent>
    { showFeedback &&
      <div 
        className={"feedback " + (category === FeedbackCategories.FAILURE ? 'feedback-failure' : 'feedback-success') }
      >
        {feedback}
      </div> }
    {children}
  </WrappedComponent>
)

export default WithFeedbackHandling