import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="w-full bg-slate-50 min-h-dvh flex flex-col">
      <Header />
      <main className="w-full bg-gray-50 flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout