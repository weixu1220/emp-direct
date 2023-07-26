import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { EmployeeProvider } from './EmployeeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmployeeProvider>
    <Router>
      <div className="wrapper">
      <App />
      </div>
    </Router>
  </EmployeeProvider>,
)
