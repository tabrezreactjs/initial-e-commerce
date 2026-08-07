import React from 'react'

const Loader = () => {
  return (
    <div className="w-full max-w-32 flex justify-center items-center flex-col m-auto">
      <div className="text-slate-900 text-2xl self-center mb-5">Loading...</div>
      <div className="w-[30%] h-2.5 bg-slate-900 rounded-full animate-loader-bar" />
    </div>
  )
}

export default Loader