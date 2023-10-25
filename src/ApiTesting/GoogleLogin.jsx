import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Google = () => {
  const navigate = useNavigate();
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/google_signup",
        {
          username: data.name,
          lastname: data.family_name,
          email: data.email,
          firstname: data.given_name,
        }
      );
      toast.success(response.data.msg);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.user.id);
      sessionStorage.setItem("currency", response.data.user.currency);
      sessionStorage.setItem("username", response.data.user.username);
      sessionStorage.setItem("userFirstname", response.data.user.firstname);
      sessionStorage.setItem("userLastname", response.data.user.lastname);
      sessionStorage.setItem("userEmail", response.data.user.email);
      sessionStorage.setItem("userPhone", response.data.user.phone_no);
      sessionStorage.setItem("country", response.data.user.country);
      sessionStorage.setItem("dob", response.data.user.dob);
      sessionStorage.setItem("gender", response.data.user.gender);
      sessionStorage.setItem("userImg", response.data.user.image_path);
      if (sessionStorage.getItem("bookRoute")) {
        navigate(sessionStorage.getItem("bookRoute"));
        sessionStorage.removeItem("bookRoute");
      } else navigate("/dashboard");
    } catch (error) {
      navigate("/login");
    }
  };
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const googleData = jwt_decode(credentialResponse.credential);
        postData(googleData);
      }}
      onError={() => {
        toast.error("Login Failed");
      }}
    />
  );
};

export default Google;
