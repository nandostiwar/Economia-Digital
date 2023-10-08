import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ListadoClientes from './views/ListadoClientes.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ListadoClientes",
    element: <ListadoClientes />,
  },

]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)