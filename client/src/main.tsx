import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
