import React from "react";
import PublicLayout from "../component/PublicLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PublicLayout>
      <div
        style={{ textAlign: "center", marginBottom: "1.6rem" }}
        className="mt-5"
      >
        <h2>Page Not Found</h2>
        <div>
          <p>Page not found.</p>
          <p>
            The above error occurred while the Web server was processing your
            request.
          </p>
          <p>
            Please <Link to="/contact">Contact us</Link> if you think this is a
            server error. Thank you!
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
