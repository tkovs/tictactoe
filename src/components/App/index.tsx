import React, { FC } from 'react'
import Game from '../Game'
import WithFeedbackHandling from '../WithFeedbackHandling'

interface AppProps {
  feedback: string
  category: string
  handleClick: () => void
}

type Props = AppProps

const AppWrapped = WithFeedbackHandling(({children}): any => (
  <div className="app">
    {children}
  </div>
))

const App: FC<Props> = ({ feedback, category }: Props) => (
  <AppWrapped showFeedback={feedback !== null} feedback={feedback} category={category}>
    <Game />
  </AppWrapped>
)

export default App