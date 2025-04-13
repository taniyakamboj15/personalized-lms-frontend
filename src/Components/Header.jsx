import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Sidebar as MenuIcon } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useUserAuth from "../hooks/useUserAuth";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const { user, loading } = useUserAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !user) {
      clearUser();
      return;
    } else {
      dispatch(setUser(user));
    }
  }, [user, loading, navigate]);

  const location = useLocation();
  return (
    <div className='navbar shadow-sm z-20 bg-neutral-100 dark:bg-gray-800 border-b-2 border-zinc-700 shadow-neutral-400'>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <div className='flex-none'>
          <button
            className={`btn btn-square btn-ghost transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "scale-x-[-1] " : "scale-x-100"
            }`}
            onClick={toggleSidebar}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      ) : null}

      <div className='flex-1'>
        <Link to='/' className='btn btn-link'>
          <img src={Logo} className='h-28' />
        </Link>
      </div>
      <div className='flex-none'>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
