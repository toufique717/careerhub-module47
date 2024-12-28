import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root/Root.jsx';
import Home from './componants/Home/Home.jsx';
import Errorpage from './Errorpage/Errorpage.jsx';
import Appliedjob from './Appliedjob/Appliedjob.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:
    [
       
      {
        path:'/',
        element: <Home></Home>
      },

      {
        path:'/applied',
        element:  <Appliedjob></Appliedjob>
      }
 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
