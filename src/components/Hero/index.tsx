import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div
            className="flex flex-col md:flex-row justify-center items-center bg-white mt-14 md:mt-28"
        >
            {/* <div className="ml-standard w-[600px] space-y-4 w-1/2"> */}
            {/* <div className="ml-standard space-y-4 w-1/2"> */}
            {/* <div className="ml-0 md:ml-standard space-y-4 md:w-1/2"> */}
            <div className="ml-0 md:ml-standard space-y-4 w-[94%] md:w-1/2">
                {/* <div className="ml-0 md:ml-standard space-y-4 w-1/2 bg-orange-400"> */}
                <h1
                    className="text-black text-6xl font-bold w-[500px]"
                // className="text-black text-6xl font-bold w-[800px] md:w-[500px]"
                >Learn new skills online with ease</h1>
                <p
                    className="text-black w-[500px] text-base"
                >Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <div
                    // className="space-y-2 md:space-x-2 flex flex-col md:flex-row"
                    // className="space-x-0 space-y-2 md:space-x-2 flex flex-col md:flex-row"
                    // className="space-x-0 md:space-x-0 flex flex-col md:flex-row"
                    className="space-x-2 flex flex-row "
                >
                    <button
                        className="bg-black text-white p-2 rounded-lg"
                    >Start learning now</button>
                    <button
                        className="border border-black bg-white text-black p-2 rounded-lg"
                    >Explore Courses</button>
                </div>
            </div>
            <div className="w-1/2 mt-10 md:mt-2">
                <Image
                    // className="w-80"
                    src={"/images/hero.svg"} width="900" height="900" alt="hero" />
            </div>
        </div >
    )
}

export default Hero
