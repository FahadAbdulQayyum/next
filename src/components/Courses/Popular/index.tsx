import Image from 'next/image'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Popular = () => {

    const data = [
        {
            image: "/image.svg",
            imageTitle: "Design",
            imageRate: "5.0",
            title: "UX/UI Design 201",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
        {
            image: "/Programming.svg",
            imageTitle: "Programming",
            imageRate: "5.0",
            title: "Introduction to Python",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
        {
            image: "/Business.svg",
            imageTitle: "Business",
            imageRate: "5.0",
            title: "Data Analysis for Beginners",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
        {
            image: "/Art.svg",
            imageTitle: "Art",
            imageRate: "5.0",
            title: "Art Specialization",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
        {
            image: "/Law.svg",
            imageTitle: "Law",
            imageRate: 5.0,
            title: "Rule of Law",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
        {
            image: "/Tech.svg",
            imageTitle: "Tech",
            imageRate: "5.0",
            title: "Introduction to webflow",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        },
    ]

    return (
        <div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {data.map((v, i) => {
                    return <div
                        key={i}
                        className="flex justify-center flex-col bg-primary">
                        <Image src={"/images/Courses/" + v.image} alt={v.image} width={500} height={500} />
                        <span
                            className="p-5"
                        >
                            <span
                                className="flex justify-between mb-4 "
                            >
                                <span
                                    className="font-bold"
                                >{v.imageTitle}</span>
                                <span
                                    className="flex justify-between items-center space-x-2"
                                >
                                    <BsStarFill color={"lightgray"} size={20} />
                                    <span>{v.imageRate}</span>
                                </span>
                            </span>
                            <h1
                                className="font-bold text-xl"
                            >{v.title}</h1>
                            <p
                                className="text-base py-2"
                            >{v.desc}</p>
                            <span
                                className="flex justify-between items-center"
                            >
                                <button
                                    className="border border-black rounded-lg px-4 py-2"
                                >Enroll Now</button>
                                <p>$400</p>
                            </span>
                        </span>
                    </div>
                })}
            </div >
            <div
                className="flex justify-center my-8"
            >
                <button
                    className="border border-black rounded-lg p-2 py-3"
                >View All Courses</button>
            </div>
        </div>
    )
}

export default Popular
