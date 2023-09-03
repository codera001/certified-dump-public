import React from "react";
import axios from "axios";

import { GoogleLogin } from "@react-oauth/google";

const Google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Google;
