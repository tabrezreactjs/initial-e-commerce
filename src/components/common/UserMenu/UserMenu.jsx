import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import {
  FiUser,
  FiPackage,
  FiHeart,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { toast } from "react-hot-toast";

const UserMenu = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener(
        "mousedown",
        closeMenu
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <FiUser size={22} />
        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div className="w-72 bg-white border rounded-xl overflow-hidden shadow-xl absolute top-12 right-0">
          <div className="border-b p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
                <FiUser size={22} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {user?.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              to="/profile"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
            >
              <FiUser />
              My Profile
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
            >
              <FiPackage />
              My Orders
            </Link>

            <Link
              to="/wishlist"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
            >
              <FiHeart />
              Wishlist
            </Link>
          </div>

          <div className="border-t">
            <button
              onClick={handleLogout}
              className="w-full text-red-600 flex items-center gap-3 px-5 py-3 hover:bg-red-50"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu