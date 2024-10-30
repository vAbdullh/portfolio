import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaUniversity, FaClock, FaLaptopCode, FaCode } from "react-icons/fa";
import { GrLanguage, GrArchlinux } from "react-icons/gr";
export default function Tags() {
    return (
        <div className='flex flex-wrap gap-1 z-10 gap-y-2 sm:gap-y-3 bg-black1 border rounded-10 border-light-black p-2'>
            <Tag>
                <FaLocationDot className='text-primary' />
                jeddah
            </Tag>
            <Tag>
                <GrLanguage className='text-primary' />
                English - arabic
            </Tag>
            <Tag>
                <FaUniversity className='text-primary' />
                King Abdul Aziz University
            </Tag>
            <Tag>
                <FaClock className='text-primary' />
                UTC+3
            </Tag>
            <Tag>
                <FaLaptopCode className='text-primary' />
                information technology
            </Tag>
            <Tag>
                <FaCode className='text-primary' />
                Front-end
            </Tag>
            <Tag>
                <GrArchlinux className='text-primary' />
                Arch linux
            </Tag>
        </div>
    )
}
function Tag({ children }) {
    return (
        <div className="w-fit flex gap-2 justify-center items-center border py-1 px-2 rounded-full border-light-black bg-black capitalize text-xs">
            {children}
        </div>
    )
}