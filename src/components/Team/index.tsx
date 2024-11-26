import Image from 'next/image'
import React from 'react'
import { BsGlobe, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Team = () => {

    const teamInfo = [
        { image: "james.svg", title: "James Nduku", dept: "Marketing Coordinator" },
        { image: "joseph.svg", title: "Joseph Munyambu", dept: "Nursing Assistant" },
        { image: "joseph1.svg", title: "Joseph Ngumbau", dept: "Medical Assistant" },
        { image: "Erick.svg", title: "Erick Kipkemboi", dept: "Web Designer" },
        { image: "stephen.svg", title: "Stephen Kerubo", dept: "President of Sales" },
        { image: "john.svg", title: "John Leboo", dept: "Dog Trainer" },
    ]

    return (
        <div
            // className="flex flex-col justify-center items-center px-standard"
            // className="flex flex-col items-center px-standard"
            // className="flex flex-col items-center"
            className="flex flex-col justify-center bg-primary py-10"
        >
            <span
                className="flex flex-col justify-center items-center space-y-5 mb-10"
            >
                <h1
                    className="text-3xl font-bold"
                >Our team</h1>
                <p
                    className="text-base"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
            <span
                // className="grid grid-cols-3 gap-4 gap-y-10"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10"
            >
                {teamInfo.map((v, i) => {
                    return <div
                        key={i}
                        className="flex flex-col justify-center items-center space-y-4"
                    >
                        <Image src={"/images/Teams/" + v.image} alt={v.image} width={100} height={100} />
                        <span
                            className="flex flex-col justify-center items-center"
                        >
                            <h1
                                className="font-bold"
                            >{v.title}</h1>
                            <p>{v.dept}</p>
                        </span>
                        <span
                            className="flex justify-between w-24"
                        >
                            <BsLinkedin />
                            <BsTwitter />
                            <BsGlobe />
                        </span>
                    </div>
                })}
            </span>
        </div >
    )
}

export default Team
