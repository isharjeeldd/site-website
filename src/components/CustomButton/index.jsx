import React from 'react'

const CustomButton = ({ btnTitle }) => {
    return (
        <>
            <button class="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-12 py-3 font-bold">
                <span class="absolute left-0 top-0 h-32 w-40 -translate-y-4 translate-x-12 rotate-45 bg-secondary opacity-[3%]"></span>
                <span class="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-secondary opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-2"></span>
                <span class="relative w-full text-left text-secondary transition-colors duration-200 ease-in-out group-hover:text-white text-[14px]">{btnTitle}</span>
                <span class="absolute inset-0 rounded-full border-2 border-secondary"></span>
            </button>
        </>
    )
}

export default CustomButton
