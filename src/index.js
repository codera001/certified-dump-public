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
import Login  from "./component/Login/Login"
import Signup from "./component/Signup/Signup";
import Providers from "./component/Providers/Providers";
import ProNavbar from "./component/ProNavbar/ProNavbar";
import Alibaba from "./component/Exams/Alibaba";
import Blockchain from "./component/Exams/Blockchain";
import Cisco from "./component/Exams/Cisco";
import Cloudera from "./component/Exams/Cloudera";
import EcCouncil from "./component/Exams/EcCouncil";
import Fortinet from "./component/Exams/Fortinet";
import Google from "./component/Exams/Google";
import Huawei from "./component/Exams/Huawei";
import Isaca from "./component/Exams/Isaca";
import Juniper from "./component/Exams/Juniper";
import Microsoft from "./component/Exams/Microsoft";
import Netapp from "./component/Exams/Netapp";
import Nokia from "./component/Exams/Nokia";
import Qlikview from "./component/Exams/Qlikview";
import Redhat from "./component/Exams/Redhat";
import Salesforce from "./component/Exams/Salesforce";
import Testprep from "./component/Exams/Testprep";
import Vmware from "./component/Exams/Vmware";
import Zend from "./component/Exams/Zend";





import Support from "./dashboard/support/Support";

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
      <Route path="providers" element={<Providers />} />
      <Route path="pronavbar" element={<ProNavbar />} />
      <Route path="alibaba" element={<Alibaba />} />
      <Route path="blockchain" element={<Blockchain />} />
      <Route path="cisco" element={<Cisco />} />
      <Route path="cloudera" element={<Cloudera />} />
      <Route path="eccouncil" element={<EcCouncil />} />
      <Route path="fortinet" element={<Fortinet />} />
      <Route path="google" element={<Google />} />
      <Route path="huawei" element={<Huawei />} />
      <Route path="isaca" element={<Isaca/>} />
      <Route path="juniper" element={<Juniper />} />
      <Route path="providers" element={<Microsoft />} />
      <Route path="netapp" element={<Netapp />} />
      <Route path="nokia" element={<Nokia />} />
      <Route path="qlikview" element={<Qlikview />} />
      <Route path="redhat" element={<Redhat/>} />
      <Route path="sakesforce" element={<Salesforce/>} />
      <Route path="testprep" element={<Testprep/>} />
      <Route path="vmware" element={<Vmware/>} />
      <Route path="zend" element={<Zend/>} />
      <Route path="support" element={<Support />} />
    </>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
