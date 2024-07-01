import React from 'react'
import ReactDOM from 'react-dom/client'
import GameWindow from '/src/components/GameWindow.jsx'
import '/styles/output.css'
import ActionsBox from './components/ActionsBox'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameWindow />
    <ActionsBox />
  </React.StrictMode>,
)
