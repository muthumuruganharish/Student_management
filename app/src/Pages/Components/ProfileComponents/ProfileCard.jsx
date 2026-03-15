import React from 'react'

const ProfileCard = ({icon:Icon,label,value,color}) => {
  return (
    <div>

         <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 h-full">

      <div className={`p-3 ${color} rounded-xl`}>
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900 break-all">{value}</p>
      </div>

    </div>

      
    </div>
  )
}

export default ProfileCard
