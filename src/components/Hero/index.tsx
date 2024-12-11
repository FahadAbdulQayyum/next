import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen mx-auto overflow-hidden">
            {/* The hero image will cover the full container */}
            <Image
                src="/assets/hero-image.svg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority
                className="object-center" // Optionally center the image
                loading="eager" // Ensures faster loading
            />

            {/* You can add content like headings, buttons, etc., on top of the image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
                <p className="mt-4 text-xl">Explore the latest collection of Nike shoes</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full">Shop Now</button>
            </div>
        </div>
    );
};

export default Hero;
