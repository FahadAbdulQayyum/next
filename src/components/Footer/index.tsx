import Image from 'next/image'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa6'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <div
            className="md:px-standard my-10"
        >
            <div
                className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6"
            >
                <span
                    className="-ml-14 md:-ml-0"
                >
                    <Image src={"/images/dsgnrlogo.svg"} alt="logo" width={100} height={100} />
                </span>
                <span
                    className="-ml-14 md:-ml-0"
                >
                    <h1
                        className="font-bold py-2"
                    >Courses</h1>
                    <ul
                        className="space-y-2 md:space-y-4 md:mt-4"
                    >
                        <li>Business</li>
                        <li>Development</li>
                        <li>Technology</li>
                        <li>Design</li>
                        <li>Programming</li>
                    </ul>
                </span>
                <span>
                    <h1
                        className="font-bold py-2"
                    >Resources</h1>
                    <ul
                        className="space-y-2 md:space-y-4 md:mt-4"
                    >
                        <li>Career</li>
                        <li>Resume</li>
                        <li>Learning</li>
                        <li>Interview Preparation</li>
                        <li>Jobs</li>
                    </ul>
                </span>
                <span>
                    <h1
                        className="font-bold py-2"
                    >About Us</h1>
                    <ul
                        className="space-y-2 md:space-y-4 md:mt-4"
                    >
                        <li>Contact</li>
                        <li>Help/Support</li>
                        <li>FAQ</li>
                        <li>Terms and Conditions</li>
                        <li>Partners</li>
                    </ul>
                </span>
            </div>
            <div
                className="border border-black my-5"
            ></div>
            <div
                className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-3 md:space-y-0"
            >
                <span
                    className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-2 md:space-y-0 w-[100%] md:w-[50%]"
                >
                    <p>2023 Ddsgnr. All right reserved.</p>
                    <span
                        className="flex justify-between space-x-5"
                    >
                        <a
                            className="underline"
                        >Privacy Policy</a>
                        <a
                            className="underline"
                        >Terms of Service</a>
                        <a
                            className="underline"
                        >Cookies Settings</a>
                    </span>
                </span>
                <span
                    className="flex space-x-2"
                >
                    <FaFacebook />
                    <BsInstagram />
                    <FiTwitter />
                    <CiLinkedin />
                </span>
            </div>
        </div>
    )
}

export default Footer
