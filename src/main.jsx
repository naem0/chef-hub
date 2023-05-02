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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch(`http://localhost:5000/chef`),
      },
      {
        path:":id",
        element: <Recipes></Recipes> ,
        loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path:"/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
