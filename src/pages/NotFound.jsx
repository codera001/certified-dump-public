import React from "react";
import PublicLayout from "../component/PublicLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PublicLayout>
      <div  style={{ textAlign: "center", marginBottom: "1.6rem" }} className="mt-5">
        Page Not Found <Link to="/">Go back to home page</Link>{" "}
      </div>
    </PublicLayout>
  );
};

export default NotFound;
