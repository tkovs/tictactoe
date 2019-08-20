import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Game from './components/Game'
import configureStore from './redux/appStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
