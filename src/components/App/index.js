import React from 'react'
import Game from '../Game'
import WithFeedbackHandling from '../WithFeedbackHandling'

const AppWrapped = WithFeedbackHandling(({children}) => (
  <div className="app">
    {children}
  </div>
))

const App = (props) => (
  <AppWrapped showFeedback={props.feedback !== null} feedback={props.feedback} category={props.category}>
    <Game />
  </AppWrapped>
)

export default App