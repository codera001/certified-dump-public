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
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPass from "./pages/Verify/ForgotPass";
import VerifyEmail from "./pages/Verify/VerifyEmail";
import Success from "./pages/Verify/Success";
import Providers from "./pages/Providers/Providers";
import About from "./pages/About/About";
import Alibaba from "./pages/Exams/Alibaba";
import Preview from "./pages/Preview/Preview";
import Blockchain from "./pages/Exams/Blockchain";
import Cisco from "./pages/Exams/Cisco";
import Cloudera from "./pages/Exams/Cloudera";
import EcCouncil from "./pages/Exams/EcCouncil";
import Fortinet from "./pages/Exams/Fortinet";
import Google from "./pages/Exams/Google";
import Huawei from "./pages/Exams/Huawei";
import Isaca from "./pages/Exams/Isaca";
import Juniper from "./pages/Exams/Juniper";
import Microsoft from "./pages/Exams/Microsoft";
import Netapp from "./pages/Exams/Netapp";
import Nokia from "./pages/Exams/Nokia";
import Qlikview from "./pages/Exams/Qlikview";
import Redhat from "./pages/Exams/Redhat";
import Salesforce from "./pages/Exams/Salesforce";
import Testprep from "./pages/Exams/Testprep";
import Vmware from "./pages/Exams/Vmware";
import Zend from "./pages/Exams/Zend";
import Support from "./dashboard/support/Support";
import Chat from "./dashboard/chats/Chat";
import Contact from "./component/Contact/Contact";
import Apilog from "./ApiTesting/Apilog";
import Apisign from "./ApiTesting/Apisign";
import Verify from "./ApiTesting/Verify";
import PassReset from "./ApiTesting/PassReset";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./dashboard/ProtectedRoutes";
import Payment from "./dashboard/payment/Payment";
import VerifyForgotPass from "./pages/Verify/VerifyForgotPass";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="forgot-password" element={<ForgotPass />}></Route>
      <Route path="verify-account" element={<VerifyForgotPass />}></Route>
      <Route path="verify-email" element={<VerifyEmail />}></Route>
      <Route path="success" element={<Success />}></Route>
      <Route path="providers" element={<Providers />} />
      <Route path="about" element={<About />} />
      <Route path="alibaba" element={<Alibaba />} />
      <Route path="alibabaPreview" element={<Preview />} />
      <Route path="blockchain" element={<Blockchain />} />
      <Route path="cisco" element={<Cisco />} />
      <Route path="cloudera" element={<Cloudera />} />
      <Route path="eccouncil" element={<EcCouncil />} />
      <Route path="fortinet" element={<Fortinet />} />
      <Route path="google" element={<Google />} />
      <Route path="huawei" element={<Huawei />} />
      <Route path="isaca" element={<Isaca />} />
      <Route path="juniper" element={<Juniper />} />
      <Route path="providers" element={<Microsoft />} />
      <Route path="netapp" element={<Netapp />} />
      <Route path="nokia" element={<Nokia />} />
      <Route path="qlikview" element={<Qlikview />} />
      <Route path="redhat" element={<Redhat />} />
      <Route path="sakesforce" element={<Salesforce />} />
      <Route path="testprep" element={<Testprep />} />
      <Route path="vmware" element={<Vmware />} />
      <Route path="zend" element={<Zend />} />
      <Route path="contact" element={<Contact />} />
      <Route path="apilog" element={<Apilog />} />
      <Route path="apisign" element={<Apisign />} />
      <Route path="confirm-email" element={<Verify />} />
      <Route path="reset-password" element={<PassReset />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Overview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="library" element={<Library />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="payment" element={<Payment />} />
        <Route path="support" element={<Support />} />
        <Route path="chat/:ticketId" element={<Chat />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
