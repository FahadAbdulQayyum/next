import React from 'react'

const Newsletter = () => {
    return (
        <div
            // className="flex justify-between px-standard my-10"
            className="flex flex-col  justify-between px-standard my-10"
        >
            <div
                className="flex flex-col justify-center items-center md:items-start md:justify-normal"
            >
                <h1
                    className="font-bold"
                >Subscribe to our newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div
                className="flex flex-col space-y-3"
            >
                <span
                    className="space-y-2 md:space-x-2 flex flex-col md:flex-row"
                >
                    <input
                        className="border border-black rounded-lg p-2 px-4"
                        placeholder='Enter your email' />
                    <button
                        className="border border-black rounded-lg p-2 px-4"
                    >Subscribe</button>
                </span>
                <span
                    className="text-[10px] text-center md:text-start"
                >By subscribing you agree to with our <a
                    className="underline"
                >Privacy Policy</a> </span>
            </div>
        </div>
    )
}

export default Newsletter
