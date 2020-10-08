import React, { FC, ComponentType, ReactChildren } from 'react'
import './index.css'
import { FeedbackCategories } from '../../actions'

// IMPLEMENTAR CORES NO FEEDBACK

interface WithFeedbackHandlingProps {
  showFeedback: boolean,
  feedback: boolean,
  category: string,
  children: ReactChildren,
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