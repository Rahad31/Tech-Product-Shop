import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  //     const { user, logOut } = useContext(AuthContext);
  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => toast("logged out successfully"))
  //       .catch((error) => console.error(error));
  //   };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* {!user && (
        <> */}
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      {/* </>
      )}{" "} */}
      {/* {user && (
        <> */}{" "}
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      {/* </>
      )} */}
    </>
  );
  return (
    <div className="container mx-auto my-6 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl">
            <img src="https://i.ibb.co/jznMvyw/logo.png"></img>
            <span className="text-[#EAA334] ">TECH</span> BD
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-1 flex flex-col-reverse pl-10 pt- md:flex-row md:pl-0 md:pt-0">
          {/* {user ? (
            <>
              <span>
                <img
                  className="w-[35px] h-[35px] rounded-full"
                  src={user.photoURL}
                ></img>
              </span>
              <span>{user.displayName}</span>
              <a onClick={handleLogOut} className="btn btn-sm">
                Sign out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )} */}
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
