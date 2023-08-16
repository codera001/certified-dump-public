import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Overview from "./dashboard/overview/Overview";
import Profile from "./dashboard/profile/Profile";
import Library from "./dashboard/library/Library";
import Wallet from "./dashboard/wallet/Wallet";
import Check from "./dashboard/check";
import Login  from "./component/Login/Login"
import Signup from "./component/Signup/Signup";
import Providers from "./component/Providers/Providers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="dashboard" element={<Overview />} />
      <Route path="profile" element={<Profile />} />
      <Route path="library" element={<Library />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="check" element={<Check />} />
      <Route path="providers" element={<Providers />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
