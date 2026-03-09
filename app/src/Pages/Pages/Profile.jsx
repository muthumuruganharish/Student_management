import React from 'react'
import { Mail, GraduationCap, Hash, User } from "lucide-react";
import ProfileHeader from '../Components/ProfileComponents/ProfileHeader';
import ProfileCard from '../Components/ProfileComponents/ProfileCard';
import Heading from '../Components/ProfileComponents/Heading';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Heading
                role="Student Profile"
            />
              <ProfileHeader
                    name="hari"
                    department="IT"
                    initials="H"

                />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
                <ProfileCard
                    icon={Hash}
                    label="Register Number"
                    value="21CSE045"
                    color="bg-blue-50 text-blue-600"
                />

                <ProfileCard
                    icon={Mail}
                    label="Email"
                    value="student@email.com"
                    color="bg-indigo-50 text-indigo-600"
                />

                <ProfileCard
                    icon={GraduationCap}
                    label="Department"
                    value="CSE"
                    color="bg-purple-50 text-purple-600"
                />

                <ProfileCard
                    icon={User}
                    label="CGPA"
                    value="8.6"
                    color="bg-green-50 text-green-600"
                />

            </div>

        </div>
    )
}

export default Profile
