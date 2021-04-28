import React from 'react'
import ReactDOM from 'react-dom'
import { Globalstyle } from './theme/globalStyle'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
