import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && <p>{user.email}</p>}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userImage}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
