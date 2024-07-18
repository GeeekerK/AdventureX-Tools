import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Send , Call, ScriptDeploy,VerifyContract} from './comp/FoundryT'

function App() {
  return (
    <div>
      <h1>部署</h1>
      <ScriptDeploy />
      <h1>开源验证</h1>
      <VerifyContract />
      <h1>Send</h1>
      <Send />
      <h1>Call</h1>
      <Call />
    </div>
  )
}

export default App
