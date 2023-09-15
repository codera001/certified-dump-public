import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";

const Google = () => {
  const navigate = useNavigate();
  const postToken = async (token) => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/google_signup",
        {
          token: token,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        // console.log(credentialResponse.credential);
        const googleToken = credentialResponse.credential;
        sessionStorage.setItem("google-token", googleToken);
        postToken(googleToken);
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
