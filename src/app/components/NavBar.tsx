'use client'

import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";
import styles from '../testpage/XeDropdown.module.css'
import { GoBell } from "react-icons/go";
import { BsBuilding } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function NavBar() { //bg-gradient-to-r from-blue-950 to-blue-900

    const [active, setActive] = useState<string | null>(null);

    const showMenu = (id: string) => setActive(id);
    const hideMenu = () => setActive(null);

    ///////////////////////////////////////////////////////////////////

    // const [activeMenu, setActiveMenu] = useState<string | null>(null);

    // const openMenu = (id: string) => setActiveMenu(id);
    // const closeMenu = () => setActiveMenu(null);

    {/*//////////////////////////////////////////////////////////////////*/ }

    // const [activeMenu2, setActiveMenu2] = useState<string | null>(null)
    // const closeTimeout = useRef<NodeJS.Timeout | null>(null)

    // const openMenu2 = (menu: string) => {
    //     if (closeTimeout.current) clearTimeout(closeTimeout.current)
    //     setActiveMenu2(menu)
    // }

    // const delayCloseMenu = () => {
    //     closeTimeout.current = setTimeout(() => {
    //         setActiveMenu2(null)
    //     }, 200)
    // }

    // const cancelClose = () => {
    //     if (closeTimeout.current) clearTimeout(closeTimeout.current)
    // }

    // const isMenuOpen = (menu: string) => activeMenu === menu

    {/*////////////// humbergur menu ////////////////////////////////////////////////////*/ }


    const [isOpen, setIsOpen] = useState(false)

    // if (isOpen) {
    //     document.body.style.overflow = 'hidden'
    // }
    // else {
    //     document.body.style.overflow = 'auto'
    // }


    return (
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#000733] to-[#000c50]">
            <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-5 xl:h-[88px] xl:justify-start xl:px-0">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 710 568.71" className="w-[50px] text-white"><path fill="currentColor" d="M270.72 427.89h-79.85a2.9 2.9 0 01-2.46-1.37l-51.6-83.33-51.62 83.33a2.87 2.87 0 01-2.45 1.37H2.9a2.89 2.89 0 01-2.4-4.51L96.36 280.9 1.68 143.35a2.89 2.89 0 012.38-4.53h80.33a2.88 2.88 0 012.44 1.36l50 79.51 49.67-79a3.88 3.88 0 013.3-1.83h79.77a2.89 2.89 0 012.38 4.53L177.24 280.9l95.88 142.48a2.9 2.9 0 01-2.4 4.51zM424.65.01a282.59 282.59 0 00-208 90.9 1.47 1.47 0 001.08 2.45h12.57a2.86 2.86 0 001.87-.71 256.49 256.49 0 01168.92-63c141.47 0 256.14 113.6 256.14 253.73S542.6 537.09 401.13 537.09a256.51 256.51 0 01-168.92-63 2.86 2.86 0 00-1.87-.71h-12.57a1.47 1.47 0 00-1.08 2.45 282.59 282.59 0 00208 90.9C581.14 566.71 708 439.84 708 283.35S581.14.01 424.65.01zM537 309.09H323.47c1.87 32.38 30.45 60.31 71.9 60.31 31.92 0 52.26-12.7 64.6-32.2a2.89 2.89 0 013.78-1.06l54 28a2.9 2.9 0 011.1 4.16C493.14 407.14 449 432.8 395 432.8h-.4c-85.55 0-144.13-62.6-144.13-149.45S309 133.91 394.55 133.91s147.17 66.91 147.17 149.44a147 147 0 01-1.65 22.55c-.28 1.5-1.33 3.19-3.07 3.19zm-67.1-58.5c-4.47-18.38-26-53.3-71.91-53.3-44.1 0-66.77 27.59-72.15 53.3z"></path></svg>
                </a>

                <div className="flex xl:hidden gap-2">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col size-8 items-center justify-center rounded-[4px] bg-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-150">
                        {isOpen ? <IoCloseSharp className="text-white" size={24} /> : <IoMenu className="text-white" size={24} />}
                    </button>
                </div>

                <div className="xl:flex hidden flex-grow items-center justify-between">
                    <nav className="relative flex items-center ">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <a href="" className="text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">شخصی</a>
                                <a href="" className="text-white/60 relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">کسب و کار</a>
                            </div>

                            <div className="relative me-5 ms-1 h-6 w-[2px] border-l border-solid border-white/50"></div>

                            <div className="flex flex-1 justify-start">
                                <div className="relative">
                                    <div className="flex items-center justify-between gap-2" >
                                        <span className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">ارسال پول</span>
                                        <div className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10 flex items-center">
                                            <span className="me-2">انتقال وجه</span>
                                            {/* <IoIosArrowDown /> */}
                                        </div>
                                        <span className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">مبدل</span>
                                        <div className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10 flex items-center">
                                            <span className="me-2">ابزار ها</span>
                                            {/* <IoIosArrowDown /> */}
                                        </div>
                                        <div className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10 flex items-center">
                                            <span className="me-2">منابع</span>
                                            {/* <IoIosArrowDown /> */}
                                        </div>
                                    </div>

                                    {/* {activeMenu && <div className={styles.spacer}></div>}

                                    {activeMenu === 'menu1' && (
                                        <div className={styles.centerMenu}>
                                            <a href="#">تست ۱</a>
                                            <a href="#">تست ۲</a>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="hidden xl:flex gap-2">
                        <a href="" className="text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">راهنما</a>
                        {/* <div className="text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">ورود</div> */}
                        <div
                            onMouseEnter={() => showMenu('menu2')}
                            onMouseLeave={hideMenu}
                            className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">
                            <span>ورود</span>

                            {active === 'menu2' && (
                                <div className="dropdownMenu">
                                    <div className=" text-black text-sm bg-white mt-4 rounded-lg flex flex-col py-3 px-3 items-center gap-2">
                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <LiaTelegram className="text-blue-500 text-lg" />
                                            <span className="ms-2">انتقال وجه</span>
                                        </a>

                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <GoBell className="text-blue-500 text-lg" />
                                            <span className="ms-2">هشدارهای نرخ</span>
                                        </a>

                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <BsBuilding className="text-blue-500 text-lg" />
                                            <span className="ms-2">API ارز</span>
                                        </a>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div
                            onMouseEnter={() => showMenu('menu3')}
                            onMouseLeave={hideMenu}
                            className="cursor-pointer text-white relative rounded-lg px-4 py-1 transition-colors duration-150 bg-blue-500 hover:bg-sky-500">
                            <span>ثبت نام</span>

                            {active === 'menu3' && (
                                <div className="dropdownMenu">
                                    <div className=" text-black text-sm bg-white mt-4 rounded-lg flex flex-col py-3 px-3 items-center gap-2">
                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <LiaTelegram className="text-blue-500 text-lg" />
                                            <span className="ms-2">انتقال وجه</span>
                                        </a>

                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <GoBell className="text-blue-500 text-lg" />
                                            <span className="ms-2">هشدارهای نرخ</span>
                                        </a>

                                        <a className="w-full flex items-center rounded-md hover:bg-blue-100 px-3 py-3" style={{ fontFamily: "vazirLight" }} href="#">
                                            <BsBuilding className="text-blue-500 text-lg" />
                                            <span className="ms-2">API ارز</span>
                                        </a>
                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div className={`z-100 flex flex-col fixed xl:top-[88px] top-[72px] right-0 w-full h-full bg-white ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}>
                <div className="bg-gradient-to-r from-[#000733] to-[#000c50] h-[64px] flex items-center px-3">
                    <a href="" className="text-white relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">شخصی</a>
                    <a href="" className="text-white/60 relative rounded-lg px-4 py-1 transition-colors duration-150 hover:bg-white/10">کسب و کار</a>
                </div>

                <div className="p-6 flex flex-col justify-between fixed bottom-0 left-0  bg-white w-full top-34">
                    
                        <div className="flex flex-col text-sm overflow-auto">
                            <div className="flex items-center justify-between text-gray-700 font-bold border-b-2 border-b-gray-200 py-3">
                                <span>ارسال پول</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-700 font-bold border-b-2 border-b-gray-200 py-3">
                                <span>انتقال وجه</span>
                                <IoIosArrowDown size={20}/>
                            </div>
                            <div className="flex items-center justify-between text-gray-700 font-bold border-b-2 border-b-gray-200 py-3">
                                <span>تبدیل کننده</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-700 font-bold border-b-2 border-b-gray-200 py-3">
                                <span>ابزار ها</span>
                                <IoIosArrowDown size={20}/>
                            </div>
                            <div className="flex items-center justify-between text-gray-700 font-bold border-b-2 border-b-gray-200 py-3">
                                <span>منابع</span>
                                <IoIosArrowDown size={20}/>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-4">
                            <div className="w-full rounded-lg bg-blue-50 text-center py-2.5 font-bold text-blue-500 cursor-pointer">
                                ورود
                            </div>
                            <div className="w-full rounded-lg bg-blue-500 text-center py-2.5 font-bold text-white cursor-pointer">
                                ثبت نام
                            </div>
                        </div>
                    
                </div>
            </div>

        </header >
    )
}