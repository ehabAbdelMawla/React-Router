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





const Routers = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navigate to={ "/home" } /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />

        <Route element={ <Guard canActivated={ [ CheckUser ] } /> } >
          <Route path="books" element={ <Books /> } >
            <Route path=":id" element={ <BookView /> } />
          </Route>
        </Route>
        <Route element={ <Guard canActivated={ [ CheckUser, CheckPermision( "Add" ) ] } /> } >
          <Route path="/profile" element={ <Profile /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router >
  )
}

export default Routers;
