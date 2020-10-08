import React, { FC, ComponentType, ReactChild } from 'react'
import './index.css'
import { FeedbackCategories } from '../../actions'

// IMPLEMENTAR CORES NO FEEDBACK

interface WithFeedbackHandlingProps {
  showFeedback: boolean,
  feedback: string,
  category: string,
  children: ReactChild,
}

type Props = WithFeedbackHandlingProps

const WithFeedbackHandling = (WrappedComponent: ComponentType): FC<Props> => ({showFeedback, feedback, category, children}: Props) => (
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