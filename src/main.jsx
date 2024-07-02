import React from 'react'
import ReactDOM from 'react-dom/client'
import GameWindow from '/src/components/GameWindow.jsx'
import '/styles/output.css'
import Enemy from './components/Enemy'
import DialogBox from './components/DialogBox'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameWindow />
    <Enemy />
    <DialogBox />
  </React.StrictMode>,
)
