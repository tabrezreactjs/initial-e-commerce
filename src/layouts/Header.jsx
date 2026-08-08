import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import Logo from '../components/common/Logo/Logo'
import { FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button/Button'
import toast from 'react-hot-toast'
import UserMenu from '../components/common/UserMenu/UserMenu'

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { totalItems } = useCart();

  return (
    <header className="w-full bg-white border-b border-slate-300 z-50 shadow-sm sticky top-0">
      <div className="w-full max-w-7xl flex justify-between items-center px-6 py-4 mx-auto">
        <Logo />

        {/* <nav className="hidden items-center gap-8 md:flex">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Categories</Link>
        </nav> */}

        {loading ? null : (
          <>
            {user ? (
              <div className="flex items-center gap-5">
                <Link to="/cart" className='relative'>
                  <FiShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="min-w-4.5 h-4.5 bg-red-500 rounded-full text-white text-xs font-semibold leading-none! flex justify-center items-center px-1 absolute -top-2.5 -right-2.5">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
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
          </>
        )}
      </div>
    </header>
  )
}

export default Header