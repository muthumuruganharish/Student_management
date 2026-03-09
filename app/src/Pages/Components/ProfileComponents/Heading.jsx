import React from 'react'

const Heading = ({ role }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                {role}
            </h1>

        </div>
    )
}

export default Heading
