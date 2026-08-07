import React from 'react'
import Logo from '../components/common/Logo/Logo'
import { FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button/Button'
import toast from 'react-hot-toast'
import UserMenu from '../components/common/UserMenu/UserMenu'

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="w-full bg-white border-b border-slate-300 z-50 shadow-sm sticky top-0">
      <div className="w-full max-w-7xl flex justify-between items-center px-6 py-4 mx-auto">
        <Logo />

        {/* <nav className="hidden items-center gap-8 md:flex">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Categories</Link>
        </nav> */}

        {user ? (
          <div className="flex items-center gap-5">
            <Link to="/cart">
              <FiShoppingCart size={22} />
            </Link>

            <UserMenu />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button>
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button variant="secondary">
                Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header