import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/logo.jpeg'

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user?.email);
    const handleLogout=()=>{
        logOut()
    }
    return (
        <div>
                <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <div className="flex items-center p-2">
              <Link to='/'><img style={{width:'70px'}} src={logo} alt="" /></Link> 
              <Link to='/'>Home Electro</Link>
            </div>
            <ul className="items-stretch hidden space-x-3 lg:flex">
                  
                {user ?
                    <>
                <li className="flex">
                   <Link  className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" to='/my-reviews'>My Reviews</Link>
                </li>
                <li className="flex">
                    <Link  className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" to='/add-services'>Add Service</Link>
                </li>
                <li className="flex">
                    <Link to="/services" className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">All Service</Link>
                </li>
                </> : ''
                }
                <li className="flex">
                   <Link  className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" to='/blogs'>Blogs</Link>
                </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
               {
                user? 
                <button className="self-center px-8 py-3 font-semibold rounded" onClick={handleLogout}>Logout</button>:
                <>
                <Link to="/login"><button  className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign in</button></Link> 
                <Link to="/register"> <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>   
                </>
               
               }
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
        </div>
    );
};

export default Header;