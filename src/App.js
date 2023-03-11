import React from 'react'
import {app} from './firebaseConfig'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/details',
    element: <Details />
  }
]);

function App() {


  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App