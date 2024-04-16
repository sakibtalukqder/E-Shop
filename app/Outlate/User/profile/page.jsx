"use client"

// components/page.js
import { useState } from 'react';

const Page = () => {
    // Sample user data
    const [user, setUser] = useState({
        fullName: "John Doe",
        email: "email@gmail.com",
        mobileNumber: "123-456-7890",
        presentAddress: "123 Street, City, Country",
        profileImage: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", // Placeholder image path
        coverPhoto: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", // Placeholder cover photo path
        posts: [
            { id: 1, text: "This is my first post.", likes: 10, comments: 5 },
            { id: 2, text: "Second post here!", likes: 20, comments: 8 },
            { id: 3, text: "Last post for now.", likes: 15, comments: 3 }
        ]
    });

    const handleSubmit = () => {

    }



    return (
        <div>
            <div className="hero bg-base-200">

                <div className="hero-content flex-col lg:flex-row ">
                    <div className='md:w-1/3 flex justify-center flex-col gap-5'>
                        <div className='relative flex items-center justify-center me-12'>
                            <img src={user.coverPhoto} className="w-1/2 rounded-lg shadow-2xl" />
                            <img src={user.profileImage} className="absolute right-5 top-1/2 border-8 border-white w-1/3 rounded-lg shadow-2xl" />
                        </div>
                        <button className='btn btn-outline btn-accent m-8'>Chenge profile</button>
                    </div>
                    <div className='md:w-1/2 space-y-5 md:p-9'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="fullName" name="fullName" value={user.fullName}  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" value={user.email}  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" value={user.mobileNumber}  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="presentAddress" className="block text-gray-700 font-medium mb-2">Present Address</label>
                                <input id="presentAddress" name="presentAddress" value={user.presentAddress}  rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></input>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Page;

