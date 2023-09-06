import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";

const Google = () => {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        // console.log(credentialResponse.credential);
        sessionStorage.setItem("google-token", credentialResponse.credential);
        navigate("/dashboard");
        toast.success("You are logged in successfully");
      }}
      onError={() => {
        console.log("Login Failed");
        toast.error("Login Failed");
      }}
    />
  );
};

export default Google;
