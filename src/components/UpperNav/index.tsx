import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa6'
import { FiTwitter } from 'react-icons/fi'

const UpperNav = () => {
    return (
        <div
            className="hidden md:flex justify-between items-center px-standard bg-primary text-black mb-5 border border-b-2 border-black py-2"
        >
            <div
                className="flex"
            >
                <span>Phone Number: 956 742 455 678</span>
                <span
                    className="border border-gray-400 mx-3"
                ></span>
                <span>Email: info@ddsgnr.com</span>
            </div>
            <div
                className="flex space-x-3"
            >
                <FaFacebook />
                <BsInstagram />
                <FiTwitter />
                <CiLinkedin />
            </div>
        </div>
    )
}

export default UpperNav