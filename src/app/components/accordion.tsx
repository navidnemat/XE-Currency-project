'use client'

import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

export default function Accordion({title, children} : AccordionProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mb-4 overflow-hidden">
            <button className="w-full flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-white">{title}</span>
                <IoIosArrowDown
                    size={20}
                    className={`transition-transform duration-300 text-neutral-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                />
            </button>
            {isOpen && (
                <div className="text-white py-5 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    )
}