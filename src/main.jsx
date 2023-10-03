import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCeatedRouter from './Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import Context from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={myCeatedRouter}></RouterProvider>
    </Context>
  </React.StrictMode>,
)
