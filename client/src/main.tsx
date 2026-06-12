import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import GreetingsPage from './layout/GreetingsPage/GreetingsPage'

// Настройка путей (роутов) приложения
const router = createBrowserRouter([
  {
    path: '/',
    element: <GreetingsPage />,
    // errorElement: <NotFoundPage />, // Сюда можно будет добавить страницу 404
  },
  {
    path: '/game',
    element: <div>Страница с игрой в шашки (Game Page)</div>, // Замените на ваш будущий компонент Game
  },
  {
    path: '/rules',
    element: <div>Правила игры (Rules Page)</div>, // Замените на компонент Rules
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
