import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
    // const testimonialInfo = ["carousel1.svg", "carousel2.svg", "carousel3.svg", "carousel5.svg", "carousel6.svg", "carousel7.svg"];
    // const testimonialInfo = [
    //     ["James Nduku", "Lorem ipsum dolor", "james.svg", "Software Developer"],
    //     ["James Nduku", "Lorem ipsum dolor", "james.svg", "Software Developer"],
    //     ["James Nduku", "Lorem ipsum dolor", "james.svg", "Software Developer"],
    // ];
    //
    const testimonialInfo = [
        {
            stars: "5",
            name: "James Nduku",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            image: "james.svg",
            dept: "Software Developer"
        },
        // {
        //     stars: "5",
        //     name: "Erick Kipkemboi",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        //     image: "Erick.svg",
        //     dept: "Scrum Master"
        // },
        // {
        //     stars: "5",
        //     name: "Stephen Kerubo",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        //     image: "stephen.svg",
        //     dept: "UI/UX Designer"
        // },
        // {
        //     stars: "5",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        //     image: "james.svg",
        // },
    ];

    return (
        <div className="flex flex-col ">
            <span
                className="flex flex-col justify-start items-start"
            >
                <h1
                    className="text-3xl font-bold"
                >Customer testimonials</h1>
                <p
                    className="text-base"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </span>
            <div className="w-full flex justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[80%]"
                >
                    <CarouselContent
                        className="w-[100%]"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            // <CarouselItem key={index} className="basis-1/5">
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    {/* <Card> */}
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        {testimonialInfo.map((v, i) => {
                                            return <div
                                                key={i}
                                                // className="flex flex-col"
                                                // className="flex flex-col border border-black p-4 space-y-4"
                                                className="flex flex-col border border-black p-6 space-y-6"
                                            >
                                                <span
                                                    className="flex"
                                                >
                                                    <BsStarFill color="black" />
                                                    <BsStarFill color="black" />
                                                    <BsStarFill color="black" />
                                                    <BsStarFill color="black" />
                                                    <BsStarFill color="black" />
                                                </span>
                                                <span>
                                                    <p>
                                                        {"\"" + v.desc + "\""}
                                                        {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." */}
                                                    </p>
                                                </span>
                                                <span
                                                    // className="flex items-center justify-between"
                                                    className="flex items-center"
                                                >
                                                    <span
                                                        className="rounded-full"
                                                    >
                                                        {/* <Image src={'/images/' + testimonialInfo[index + 1]} alt="logo" width={100} height={100} /> */}
                                                        <Image
                                                            className="rounded-full"
                                                            src={'/images/Teams/' + v.image} alt={v.image} width={50} height={50} />
                                                    </span>
                                                    <span
                                                        className="ml-4"
                                                    >
                                                        <h1
                                                            className="font-bold text-sm"
                                                        >{v.name}</h1>
                                                        <p
                                                            className="text-sm"
                                                        >{v.dept}</p>
                                                    </span>

                                                </span>
                                            </div>
                                        })}
                                    </CardContent>
                                    {/* </Card> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div >
    )
}

export default Testimonial
