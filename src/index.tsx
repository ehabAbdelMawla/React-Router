import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './Routers';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
} from "react-router-dom";
import Loader from './pages/Loader';
const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
);


root.render(
  <React.Suspense fallback={ <Loader /> }>
    <RouterProvider router={ Routers } />
  </React.Suspense>
);

reportWebVitals();
