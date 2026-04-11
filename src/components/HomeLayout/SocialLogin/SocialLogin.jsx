import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const {googleLogin} = use(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn w-full btn-outline btn-secondary">
          <FcGoogle size={22} /> Login With Google
        </button>

        <button className="btn w-full btn-outline btn-primary">
          <FaGithub size={22}/>
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
