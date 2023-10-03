import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Navbar = () => {
  const {user, userLogOut} = useContext(AuthContext);
  const logOutHandler = () =>{
    userLogOut()
    .then(() => console.log('user logout succecefully'))
    .catch(error =>console.log(error))
  }
  return (
    <div>
      <nav>
        <ul className="text-xl flex justify-end px-4 items-center gap-5 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Orders
            </NavLink>
          </li>
          <div className="navbar_end flex justify-center items-center">
            {
              user && <>
              <ul className="flex justify-center items-center gap-4">
              <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Dashboard
            </NavLink>
              </ul>
              </>
            }
            {
              user ? <>
              <span>{user.email}</span>
              <button onClick={logOutHandler} className="btn btn-sm">Sign Out</button>
              </>:
              
            <Link to="/login">
            <button className="btn btn-sm">Login</button>
            </Link>
            }
          </div>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
