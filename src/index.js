import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Overview from "./dashboard/overview/Overview";
import Profile from "./dashboard/profile/Profile";
import Library from "./dashboard/library/Library";
import Wallet from "./dashboard/wallet/Wallet";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPass from "./pages/Verify/ForgotPass";
import VerifyEmail from "./pages/Verify/VerifyEmail";
import Providers from "./pages/Providers/Providers";
import About from "./pages/About/About";
import Alibaba from "./pages/Exams/Alibaba";
import Preview from "./pages/Preview/Preview";
import Blockchain from "./pages/Exams/Blockchain";
import Support from "./dashboard/support/Support";
import Chat from "./dashboard/chats/Chat";
import Verify from "./ApiTesting/Verify";
import PassReset from "./ApiTesting/PassReset";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./dashboard/ProtectedRoutes";
import Payment from "./dashboard/payment/Payment";
import VerifyForgotPass from "./pages/Verify/VerifyForgotPass";
import VerifyPayment from "./dashboard/payment/Verify";
import Contact from "./pages/Contact/Contact";
import SuccessEmail from "./pages/Verify/SuccessEmail";
import SuccessPass from "./pages/Verify/SuccessPass";
import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/BlogDetails/SingleBlog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NotFound from "./pages/NotFound";
export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="verify-account" element={<VerifyForgotPass />}></Route>
        <Route path="forgot-password" element={<ForgotPass />}></Route>
        <Route path="verify-email" element={<VerifyEmail />}></Route>
        <Route path="success" element={<SuccessEmail />}></Route>
        <Route path="providers" element={<Providers />} />
        <Route path="about" element={<About />} />
        <Route path="provider/:providerName" element={<Alibaba />} />
        <Route
          path="provider/:providerName/:examName"
          element={<Blockchain />}
        />
        <Route
          path="provider/:providerName/:examName/:bookId"
          element={<Preview />}
        />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<SingleBlog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="confirm-email" element={<Verify />} />
        <Route path="reset-password" element={<PassReset />} />
        <Route path="success2" element={<SuccessPass />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="library" element={<Library />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment-verification" element={<VerifyPayment />} />
          <Route path="support" element={<Support />} />
          <Route path="chat/:ticketId" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <GoogleOAuthProvider clientId="808631123105-qt399aga53mske5kmea2k0t83doctuge.apps.googleusercontent.com">
      <Application />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
