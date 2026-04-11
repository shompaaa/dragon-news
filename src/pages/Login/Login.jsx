import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const togglePassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword);
  
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.code));
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-73px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button onClick={togglePassword}>
                {showPassword ? (
                  <IoEye size={20} className="absolute top-3 right-5" />
                ) : (
                  <IoEyeOff size={20} className="absolute top-3 right-5" />
                )}
              </button>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-3">
              Don't have an account?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
