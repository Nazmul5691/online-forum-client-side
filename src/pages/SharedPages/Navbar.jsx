/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import { LuBadge } from "react-icons/lu";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const DefaultProfileIcon = "https://i.ibb.co/Xt52hBm/profile.png";

  console.log(user);
  const [announcements, setAnnouncements] = useState([]);

  const isUserRegistered = users.length > 0;

  const url = `https://server-side-online-forum.vercel.app/user?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [url]);

  useEffect(() => {
    // Fetch announcements from your server
    fetch("https://server-side-online-forum.vercel.app/announcement")
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
      })
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Handle successful logout if needed
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="font-bold lg:ml-72" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/membership">
          Membership
          {isUserRegistered && (
            <span className="badge badge-primary ml-1"><LuBadge /></span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/allAnnouncements">
          <button className="flex">
            <div>
              {announcements.length > 0 && (
                <div className="relative grid grid-flow-col gap-1 items-center">
                  <IoIosNotifications className="text-2xl" />

                  <div className="badge badge-secondary">
                    {announcements.length}
                  </div>
                </div>
              )}
            </div>
          </button>
        </NavLink>
      </li>
      
     
      

      {user ? <tr key={user._id}>
            <td>
              <li>
                <div className="relative inline-block">
                  <img
                    className="w-10 rounded-full cursor-pointer"
                    src={user.photo || DefaultProfileIcon}
                    alt=""
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                    <div className="dropdown-content absolute w-28 bg-white shadow-md p-2 rounded top-10 right-0">
                      <p className="text-gray-600 font-semibold">
                        {user.displayName || user.name}
                      </p>
                      <NavLink
                        className="block text-gray-600 hover:text-blue-500 py-1"
                        to="/dashboard"
                      >
                        Dashboard
                      </NavLink>
                      <button
                        className="block text-gray-600 hover:text-red-500 py-1"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </td>
            
          </tr> : 
      (
        <li>
          <NavLink className="font-bold" to="/login">
            Join Us
          </NavLink>
        </li>
      )}


    </>
  );

  return (
    <div className={`navbar bg-base-200 md:px-10 sticky top-0 z-10`}>
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
            {navLinks}
          </ul>
        </div>
        <img
          className="w-[45px] h-[45px] rounded-full mr-2 hidden md:block"
          src="https://i.ibb.co/Gk5HP6m/logo.jpg"
          alt=""
        />
        <p className="font-bold text-blue-700 text-2xl">Talk Craft</p>
      </div>

      <div className="navbar-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
