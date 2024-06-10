import ReactDOM from 'react-dom/client'
import './index.css'
import Pokedex from './pages/Pokedex/index.jsx'
import ErrorPage from './pages/Error/Error.jsx';  // Verifique se o caminho está correto
import Login from './components/Login/login.jsx'
<<<<<<< Updated upstream
import { PokeContextProvider } from './context/pokeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <PokeContextProvider>
            {/* <Login/> */}
            <Pokedex/>
        </PokeContextProvider>
=======
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
    <RouterProvider router={router} />
    {/* <Pokedex/> */}
>>>>>>> Stashed changes
    </>
)