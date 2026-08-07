import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-7xl pb-10 pt-4 px-4 mx-auto md:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default Container