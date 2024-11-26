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
    const testimonialInfo = [
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra ornare.",
            img: 'joseph1.svg',
            name: 'James Nduku',
            dept: 'Software Developer'
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra ornare.",
            img: 'james.svg',
            name: 'Erick Kipkemboi',
            dept: 'Scrum Master'
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra ornare.",
            img: 'john.svg',
            name: 'Stephen Kerubo',
            dept: 'UI/UX Designer'
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra ornare.",
            img: 'joseph.svg',
            name: 'John Leboo',
            dept: 'President of Sale'
        },
    ];
    return (
        // <div className="flex flex-col my-10 bg-primary py-5 px-standard">
        <div className="flex flex-col bg-primary py-5 px-standard">
            <span
                className="flex flex-col justify-start items-start space-y-5 mb-5"
            >
                <h1
                    className="text-5xl font-bold"
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
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div
                                            className="flex flex-col border border-black p-6 space-y-6"
                                        >
                                            <span
                                                className="flex space-x-[2px]"
                                            >
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                                <BsStarFill color="black" />
                                            </span>
                                            <span>
                                                <p>
                                                    {"\"" + testimonialInfo[index]?.desc + "\""}
                                                </p>
                                            </span>
                                            <span
                                                className="flex items-center"
                                            >
                                                <span
                                                    className="rounded-full"
                                                >
                                                    <Image
                                                        className="rounded-full"
                                                        src={'/images/Teams/' + testimonialInfo[index]?.img}
                                                        alt={testimonialInfo[index]?.img}
                                                        width={50}
                                                        height={50} />
                                                </span>
                                                <span
                                                    className="ml-4"
                                                >
                                                    <h1
                                                        className="font-bold text-sm"
                                                    >
                                                        {testimonialInfo[index]?.name}
                                                    </h1>
                                                    <p
                                                        className="text-sm"
                                                    >
                                                        {testimonialInfo[index]?.dept}
                                                    </p>
                                                </span>

                                            </span>
                                        </div>
                                    </CardContent>
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