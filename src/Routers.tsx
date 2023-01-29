import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import CheckPermision from './guards/CheckPermision';
import CheckUser from './guards/CheckUser';

const Home = React.lazy( () => import( './pages/Home' ) );
const Books = React.lazy( () => import( './pages/Books' ) );
const BookView = React.lazy( () => import( './pages/BookView' ) );
const Login = React.lazy( () => import( './pages/login' ) );
const Profile = React.lazy( () => import( './pages/profile' ) );
const NotFound = React.lazy( () => import( './pages/NotFound' ) );
const Guard = React.lazy( () => import( './pages/Guard' ) );

const Routers = createBrowserRouter( [
  {
    path: "/",
    element: <Navigate to={ "/home" } />

  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <Guard canActivated={ [ CheckUser ] } />,
    children: [
      {
        path: "/books",
        element: <Books />,
        children: [
          {
            path: ":id",
            element: <BookView />
          }
        ]
      },
    ]
  },
  {
    element: <Guard canActivated={ [ CheckUser, CheckPermision( "Add" ) ] } />,
    children: [
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }

] )


export default Routers;
