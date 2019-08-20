import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../redux/reducers'
import '../index.css'
import Game from '../components/Game'

const store = createStore(rootReducer)

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    div
  )
})
