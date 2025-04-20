import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { Link } from 'react-router';
const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
                <div className='max-w-6xl mx-auto py-5 hidden lg:flex justify-between items-center'>
                <div>
                    <h1 className='font-extrabold text-4xl text-black'>Book Vibe</h1>
                </div>
                    <div className='flex justify justify-between gap-5 font-medium text-xl list-none'>
                        <Link to="/"><li><a href="#">Home</a></li></Link>
                        <Link to="/ABout"><li><a href="#">Listed Books</a></li></Link>
                        <li><a href=""></a>Pages to Read</li>
                    </div>
                    <div>
                        <button className='btn btn-outline btn-accent m-2'>Sign In</button>
                        <button className='btn btn-success m-2'>Sign Up</button>
                    </div>
                </div>
                <div className='flex lg:hidden w-11/12 justify-between items-center mx-auto'>
                    <div>
                        <h1 className=' font-extrabold text-3xl text-black'>Book Vibe</h1>
                    </div>
                    <div onClick={handleMenu} className='relative'>
                        {showMenu === false ? <AlignJustify />
                        : <X />}
                        <div className={`list-none text-center bg-gray-200 p-5 absolute right-0 ${showMenu ? '' : '-top-200'} duration-200`}>
                            <li className='border-b-2'><a href="#">Home</a></li>
                            <li className='border-b-2'><a href="#">Listed Books</a></li>
                            <li className='border-b-2'><a href=""></a>Pages to Read</li>
                            <button className='btn btn-outline btn-accent m-2'>Sign In</button> <br />
                            <button className='btn btn-success m-2'>Sign Up</button>
                        </div>
                    </div>
                    
                </div>
        </>
        
    );
};

export default NavBar;