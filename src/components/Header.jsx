import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [trackOpen, setTrackOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTrackOpen(false);
            }
        }
        if (trackOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }; 
    }, [trackOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`top-0 fontEB fixed z-50 w-full mx-auto text-white transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/10' : 'bg-transparent'}`} >
            <div className='flex justify-between items-center px-4 py-1.5'>
                <a href="/" className='flex items-center gap-2 ml-[50px]'>
                    <img src="/assets/images/logo.png" className='w-8 h-8 opacity-100' alt="logo" />
                    <span className='font-extrabold text-[25px] text-[#3B79FF] tracking-tight '>LIKELION SKU</span>
                </a>
                <nav className='flex gap-6 text-[15px] font-normal relative'>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className='font-base hover:font-bold text-white transition cursor-pointer focus:outline-none text-[15px]'
                            onClick={() => setTrackOpen((open) => !open)}
                        >
                            TRACK
                        </button>
                        {trackOpen && (
                            <nav className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 w-36 bg-white rounded-xl border border-[#e5e7eb] shadow-lg rounded-t-xl">
                                <ul className="flex flex-col items-start overflow-hidden w-full">
                                <li className="w-full">
                                    <Link
                                    to="/FrontEnd"
                                    className="block w-full px-4 py-2 text-[#2c2f33] text-base hover:bg-[#f5f7fa] transition rounded-t-xl"
                                    >
                                    FRONT-END
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link
                                    to="/BackEnd"
                                    className="block w-full px-4 py-2 text-[#2c2f33] text-base hover:bg-[#f5f7fa] transition"
                                    >
                                    BACK-END
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link
                                    to="/Design"
                                    className="block w-full px-4 py-2 text-[#2c2f33] text-base hover:bg-[#f5f7fa] transition rounded-b-xl"
                                    >
                                    DESIGN
                                    </Link>
                                </li>
                                </ul>
                            </nav>
                            )}
                    </div>
                    <nav>
                        <Link to="/project" className="font-base hover:font-bold text-white transition">
                        PROJECT
                        </Link>
                        </nav>
                        <nav>
                        <Link to="/team" className="font-base hover:font-bold text-white transition">
                        TEAM
                        </Link>
                        </nav>
                    <a href="https://sku-sku.com/contact" className='font-base hover:font-bold text-white transition'>CONTACT</a>
                    <a href="https://sku-sku.com/cyberCampus/Intro" target="_blank" rel="noopener noreferrer" className='font-base hover:font-bold text-white transition'>CYBERCAMPUS</a>
                </nav>
                <div className='flex items-center gap-1 mr-[50px]'>
                    <div className='pr-3'>
                        <span
                            className='flex items-center justify-center w-[29px] h-[29px] rounded-[50%] text-[14px] '
                            style={{ backgroundColor: 'rgb(255, 120, 22)' }}
                        >
                            🦁
                        </span>
                    </div>
                    <span className='text-xs'>FRONT-END</span>
                    <span className='text-[15px] font-semibold ml-1'>신영환님</span>
                    <span className='mx-1 text-[13px] text-[#666666]'>|</span>
                    <button className='text-xs'>LOGOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Header;