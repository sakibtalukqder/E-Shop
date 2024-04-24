"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const Logout = () => {
    return (
        <div>
            <button onClick={()=> signOut({
                redirect: true,
                callbackUrl : `${window.location.origin}/Components/login`,
            })} className='btn text-red-500 w-full btn-sm'>Logout</button>
        </div>
    );
};

export default Logout;