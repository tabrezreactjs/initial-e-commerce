import React from 'react'
import { useAuth } from '../../context/AuthContext';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader'

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-100 flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-100 flex justify-center items-center">
        <p>Unable to load profile.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl pb-10 pt-4 px-4 mx-auto md:px-6 lg:px-8">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="w-full mb-8">
          <div className='flex flex-col gap-1'>
            <h1 className="text-gray-900 text-3xl font-bold">
              My Profile
            </h1>
            <p className="text-gray-500">
              Manage your account and personal information.
            </p>
          </div>
        </div>

        <ProfileHeader user={user} />
      </div>
    </div>
  )
}

export default Profile