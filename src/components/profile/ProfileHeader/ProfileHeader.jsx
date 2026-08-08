import React from 'react'
import { FiMail, FiUser } from 'react-icons/fi';

const ProfileHeader = ({ user }) => {
  const fullName = user?.name || "User";
  const avatarLetter = fullName.charAt(0).toUpperCase();
  const email = user?.email || "No email available";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {/* Avatar */}
        <div className="w-24 h-24 bg-blue-100 rounded-full text-3xl font-bold text-blue-600 shrink-0 flex justify-center items-center">
          {avatarLetter}
        </div>

        {/* User Information */}
        <div className="text-center sm:text-left">
          <h1 className="text-gray-900 text-2xl font-bold">
            {fullName}
          </h1>

          <div className="text-gray-500 flex items-center justify-center gap-2 mt-2 sm:justify-start">
            <FiMail size={16} />
            <span>
              {email}
            </span>
          </div>

          {user?.username && (
            <div className="text-gray-500 text-sm flex items-center justify-center gap-2 mt-1 sm:justify-start">
              <FiUser size={15} />
              <span>
                @{user.username}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader