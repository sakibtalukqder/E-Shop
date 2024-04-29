
import { authOptions } from '@/app/api/auth/[...nextauth]/auth/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import UserIcon from './UserIcon';

const Navbar = async () => {

    const session = await getServerSession(authOptions);

    const menu = <>

        <li><Link href={'/'}>                    Home      </Link></li>
        <li><Link href={'/Components/product'}>  Product   </Link></li>
        <li><Link href={'/Components/about'}>    About     </Link></li>

        {
            (session?.user?.role == "SELLER") || (session?.user?.role === "ADMIN") ?
                <li><Link href={'/Outlate/Seller/Dashboard/Products'}>Dashboard</Link></li> : ''
        }

        {
            session?.user?.role === "ADMIN" ?
                <li><Link href={'/Outlate/Admin'}>AdminPannel</Link></li> : ''
        }

        {
            session?.user ? <>
                {/* <li><CartNav /></li> */}
            </> : <>
                <li><Link href={'/Components/login'}>    Login     </Link></li>
                <li><Link href={'/Components/sinup'}>    Sinup     </Link></li>
            </>
        }

    </>


    return (
        <>
            <div className='z-[100]'>
                <div className="navbar">
                    <div className="flex-1">
                        <Link href={'/'} className="btn btn-ghost text-xl font-bold">
                            E-Shop
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal font-bold flex items-center">
                            <div className='lg:flex hidden py-2 uppercase '>
                                {menu}
                            </div>

                            {
                                session?.user ? <>
                                    <UserIcon />
                                </> : <>

                                </>
                            }

                            <li className='block lg:hidden rounded'><label htmlFor="my-drawer-4" className="drawer-button">
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>
                            </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                    </div>
                    <div className="drawer-side z-[100]">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu menu-vertical px-8 leading-8 p-4 w-4/5 min-h-full bg-white uppercase">
                            <li className='justify-end flex pb-6 float-right w-6'>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className='hover:bg-red-500 border px-3 py-1 rounded' >
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                    </svg>
                                </label>
                            </li>
                            {/* Sidebar content here */}
                            <br />
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;