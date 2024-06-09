"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const localstore = () => {
    localStorage.clear();
}

const Logout = () => {
    return (
        <div onClick={localstore} className='text-red-500 w-full btn-sm'>
            <button onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/Components/login`,
            })} >Logout</button>
        </div>

    );
};

export default Logout;