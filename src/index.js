import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
/*import SidebarExample from './components/Sidebar'; */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/icons/css/all.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './shop';

const router = createBrowserRouter([
  { path:"/", element:<Home /> },
  { path:"/shop", element:<Shop /> },
]); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
