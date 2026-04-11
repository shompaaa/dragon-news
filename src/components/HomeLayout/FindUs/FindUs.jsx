import React, { use } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { Link } from "react-router";

const FindUs = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      {user && (
        <div>
          <h2 className="font-bold mb-5">Find Us On</h2>
          <div>
            <div className="join join-vertical w-full">
              <Link
                to="https://www.facebook.com"
                target='_blank'
                className="btn join-item bg-base-100 justify-start"
              >
                <FaFacebook />
                Facebook
              </Link>
              <Link
                to="https://www.x.com"
                target='_blank'
                className="btn join-item bg-base-100 justify-start"
              >
                <FaTwitter /> Twitter
              </Link>
              <Link
                to="https://www.instagram.com"
                target='_blank'
                className="btn join-item bg-base-100 justify-start"
              >
                <FaInstagram />
                Instagram
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindUs;
