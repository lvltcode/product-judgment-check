import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AssessmentProvider } from './state/AssessmentContext'
import { LocaleProvider } from './state/LocaleContext'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <AssessmentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AssessmentProvider>
    </LocaleProvider>
  </React.StrictMode>
)
