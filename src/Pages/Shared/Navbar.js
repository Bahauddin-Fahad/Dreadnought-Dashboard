import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem("accessToken");
  };
  return (
    <div className="navbar bg-primary px-44">
      <div className="flex-1">
        <Link to="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            {user ? (
              <button
                className="btn btn-active hover:bg-white bg-white text-primary border-0 font-bold"
                onClick={logout}
              >
                Sign Out
              </button>
            ) : (
              <Link className="font-semibold text-primary" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
