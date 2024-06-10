import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './pages/Pokedex/index.jsx'
import ErrorPage from './pages/Error/Error.jsx';  // Verifique se o caminho está correto
import LoginForm from './components/Login/LoginForm.jsx';
import { PokeContextProvider } from './context/pokeContext.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
    errorElement: <ErrorPage />,
  },
  {
      path: "/pokedex",
      element: <Pokedex/>,
      errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <PokeContextProvider>
          <RouterProvider router={router} />
        </PokeContextProvider>
    </>
)