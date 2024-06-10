import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './pages/Pokedex/index.jsx'
import ErrorPage from './pages/Error/Error.jsx';  // Verifique se o caminho está correto
import Login from './components/Login/LoginForm.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { PokeContextProvider } from './context/pokeContext.jsx'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
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
        <ToastContainer />
    </>
)