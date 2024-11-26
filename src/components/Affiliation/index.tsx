import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"

const Affiliation = () => {
    const carouselImages = ["carousel1.svg", "carousel2.svg", "carousel3.svg", "carousel5.svg", "carousel6.svg", "carousel7.svg"];
    return (
        <div className="flex justify-center items-center px-4 md:flex-row flex-col mt-20 md:mt-0">
            <div>
                <h1 className="text-[20px] font-bold">Trusted by 2000+ companies worldwide.</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    // className="w-[100%] max-w-sm"
                    className="w-[80%]"
                >
                    <CarouselContent
                        className="w-[100%]"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            // <CarouselItem key={index} className="basis-1/5">
                            <CarouselItem key={index} className="md:basis-1 lg:basis-1/3">
                                <div className="p-1 flex justify-center items-center">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image src={'/images/' + carouselImages[index + 1]} alt="logo" width={300} height={100} />
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

export default Affiliation
