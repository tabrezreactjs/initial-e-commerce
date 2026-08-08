import React from 'react'
import { useAuth } from '../../../context/AuthContext';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <section className="w-full bg-gray-100 rounded-3xl overflow-hidden relative">
        <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24 animate-pulse">
          <div className="w-32 h-5 bg-gray-200 rounded mb-5" />

          <div className="w-full max-w-xl h-12 bg-gray-200 rounded mb-4" />

          <div className="w-full h-5 max-w-lg bg-gray-200 rounded mb-8" />

          <div className="w-40 h-12 bg-gray-200 rounded-xl" />
        </div>
      </section>
    );
  }

  // ==========================================
  // AFTER LOGIN
  // ==========================================
  if (user) {
    const username = user.name;

    return (
      <section className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl text-white overflow-hidden relative">
        {/* Decorative circles */}
        <div className="w-72 h-72 bg-white/10 rounded-full absolute -top-24 -right-24" />

        <div className="w-80 h-80 bg-white/5 rounded-full absolute -left-20 -bottom-32" />

        <div className="px-6 py-10 relative sm:px-10">
          <div className="max-w-2xl">
            {/* Welcome */}
            <div className="w-fit bg-white/10 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm px-4 py-2 mb-4">
              <FiShoppingBag />
              Welcome back
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-extrabold leading-tight! sm:text-3xl lg:text-4xl">
              Hello
              {username ? `, ${username}` : "User"}!
              <br />
              Ready to shop?
            </h1>

            {/* Description */}
            <p className="max-w-xl text-blue-100 text-base leading-relaxed! mt-5 sm:text-lg">
              Discover products you'll love, explore our latest collection, and find something special today.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================
  // BEFORE LOGIN
  // ==========================================
  return (
    <section className="bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-2xl absolute -top-20 -right-20" />

      <div className="w-80 h-80 bg-indigo-500/20 rounded-full blur-2xl absolute -left-20 -bottom-32" />

      <div className="px-6 py-10 relative sm:px-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="w-fit bg-blue-500/20 rounded-full text-blue-200 text-sm font-semibold flex items-center gap-2 px-4 py-2">
            ✨ Discover Something New
          </span>

          {/* Heading */}
          <h1 className="text-2xl font-extrabold leading-tight! mt-5 sm:text-3xl lg:text-4xl">
            Shop smarter.
            <br />
            Live better.
          </h1>

          {/* Description */}
          <p className="max-w-xl text-slate-300 text-base leading-relaxed! mt-5 sm:text-lg">
            Explore our collection of amazing products at great prices. Create an account and start your shopping journey today.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-8 sm:flex-row">
            <Link
              to="/login"
              className="h-12 bg-white/10 border border-white/20 rounded-xl inline-flex justify-center items-center text-white font-semibold backdrop-blur-sm px-6  duration-300 transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="h-12 bg-blue-600 rounded-xl text-white font-semibold inline-flex justify-center items-center gap-2 px-6 duration-300 transition-all hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              Create Account
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner