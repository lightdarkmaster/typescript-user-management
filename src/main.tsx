import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from './signup/Signup'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Signup/>
  </StrictMode>,
)
