import React from 'react'

const Achievement = () => {

    const achievementScore = [
        {
            count: "200+",
            title: "Courses"
        },
        {
            count: "50K+",
            title: "Mentors"
        },
        {
            count: "370K+",
            title: "Students"
        },
        {
            count: "100+",
            title: "Recognition"
        },
    ]

    return (
        <div
            // className="flex flex-col justify-center items-center"
            // className="flex flex-col justify-center items-center px-standard"
            className="flex flex-col justify-center items-center px-standard my-20 space-y-8"
        >
            <h1
                className="text-3xl font-bold"
            >Our Achievements</h1>
            <p
                className="text-center"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <span
                // className="flex justify-between w-[100%]"
                className="grid grid-cols-2 gap-10 md:grid-cols-4 w-[100%]"
            // className="w-[100%]"
            >
                {
                    achievementScore.map((v, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center"
                            >
                                <h1
                                    className="text-3xl font-bold"
                                >{v.count}</h1>
                                <p>{v.title}</p>
                            </div>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default Achievement
