import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Recipes from './Component/Recipes/Recipes';
import AuthProvider from './Authprovider';
import Blog from './Component/Blog/Blog';
import Register from './Component/Register/Register';
import PraivatRoute from './PrivateRoute/PraivatRoute';
import ErrorPage from './Component/ErrorPage/ErrorPage';


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
        path: "/:id",
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
