import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home/Home'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import NotFound from '../pages/NotFound/NotFound'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route 
            path='/cart' 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes