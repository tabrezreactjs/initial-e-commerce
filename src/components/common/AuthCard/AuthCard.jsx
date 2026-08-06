import React from 'react'

const AuthCard = ({ 
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>
        <p className="text-slate-500 mt-2">
          {subtitle}
        </p>
      </div>
      
      <div className='w-full'>
        {children}
      </div>
    </div>
  )
}

export default AuthCard