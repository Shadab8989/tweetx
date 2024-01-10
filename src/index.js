import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Main from './components/main/main';
import Feed from "./components/feed/feed";
import Users from "./components/users/users";
import Profile from "./components/profile/profile";

const route = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />}>
          <Route path="" element={<Feed />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
      </Route>)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
