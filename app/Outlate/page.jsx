import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/auth/auth';


const page = async() => {

const session = await getServerSession(authOptions);
console.log(session);

    return (
        <div className='my-16 flex items-center justify-center'>
            Hi,, {session?.user?.name} <br />
            Email : {session?.user?.email} <br />
            Welcome as a,, {session?.user?.role} <br />
            {JSON.stringify(session)}
        </div>
    );
};

export default page;
