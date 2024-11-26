import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div
            className="flex px-standard justify-between bg-white md:bg-primary text-black py-2 border-b-4 border-gray-400"
        >
            <div>
                <Image src={"/images/dsgnrlogo.svg"}
                    width={130.6}
                    height={41}
                    alt="logo"
                />
            </div>

            <div
                // className="space-x-3"
                // className="flex justify-center"
                className="hidden md:flex items-center "
            >
                <div
                    className="flex bg-gray-200"
                >
                    <ul
                        // className="flex space-x-16 items-center bg-white px-5"
                        // className="flex space-x-14 items-center bg-white py-0"
                        className="flex space-x-14 items-center bg-white"
                    // className="flex justify-between"
                    >
                        <li
                            // className="border border-b-2"
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"
                        >Home</li>
                        <li
                            // className="border border-b-2"
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"

                        >Courses</li>
                        <li
                            // className="border border-b-2"
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"
                        >Services</li>
                        <li
                            // className="border border-b-2"
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"
                        >Achievement</li>
                        <li
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"
                        >About Us</li>
                        <li
                            // className="hover:border-b-secondary hover:border-b-4 pb-1 mt-1 hover:mt-2 px-3"
                            // className="hover:border-b-secondary hover:border-b-4 pb-2 mt-3 hover:mt-3 px-3"
                            className="hover:border-b-gray-400 hover:border-b-4 -pb-1 hover:-mb-2 hover:pb-2 px-4 py-[2px]"
                        // className="hover:border-b-gray-400 hover:border-b-4 pb-1 hover:-mb-2 hover:pb-2 px-3"
                        >Testominial</li>
                        <li
                            className="space-x-3"
                        >
                            <button
                                className="border border-gray-400 rounded-lg text-black px-4 py-2"
                            >Login</button>
                            <button
                                className="border-secondary rounded-lg bg-black text-white px-4 py-2"
                            >Sign Up</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
