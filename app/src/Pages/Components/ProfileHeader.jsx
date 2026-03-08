import React from 'react'

const ProfileHeader = ({ name, department, initials }) => {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center gap-6 mb-8">

                <div className="w-24 h-24 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl text-3xl font-bold">
                    {initials}
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                    <p className="text-gray-500">{department}</p>
                </div>

            </div>

        </div>
    )
}

export default ProfileHeader
