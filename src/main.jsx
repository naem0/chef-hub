import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import Blog from './pages/Blog/Blog';
import Recipes from './pages/Recipes/Recipes';
import PraivatRoute from './PrivateRoute/PraivatRoute';
import AuthProvider from './Authprovider';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://chef-recipe-hunting-server-naem0.vercel.app/chef`),
      },
      {
        path: "/chef/:id",
        element: <PraivatRoute><Recipes></Recipes></PraivatRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunting-server-naem0.vercel.app/chef/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
