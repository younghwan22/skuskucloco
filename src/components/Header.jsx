import React, { useState, useRef, useEffect } from 'react';

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
                    <img src="/images/logo.png" className='w-8 h-8 opacity-100' alt="logo" />
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
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-white rounded-xl shadow-lg flex flex-col py-1 z-20 border border-[#e5e7eb]">
                                <a
                                    href="https://sku-sku.com/frontend"
                                    className="px-4 py-1 text-[#222] text-[15px] font-normal hover:bg-[#f5f7fa] hover:text-black transition"
                                >FRONT-END</a>
                                <a
                                    href="https://sku-sku.com/backend"
                                    className="px-4 py-1 text-[#222] text-[15px] font-normal hover:bg-[#f5f7fa] hover:text-black transition"
                                >BACK-END</a>
                                <a
                                    href="https://sku-sku.com/pm_design"
                                    className="px-4 py-1 text-[#222] text-[15px] font-normal hover:bg-[#f5f7fa] hover:text-black transition"
                                >DESIGN</a>
                           </div>
                        )}
                    </div>
                    <a href="https://sku-sku.com/project" className='font-base hover:font-bold text-white transition'>PROJECT</a>
                    <a href="https://sku-sku.com/teamIntro" className='font-base hover:font-bold text-white transition'>TEAM</a>
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