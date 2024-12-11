import { CarouselImage } from "../Carousel";

const Category = () => {
    return (
        <div className="p-6 md:p-12 flex flex-col justify-center border-b-2 space-y-6">
            {/* Title Section */}
            <span className="text-tertiary flex items-center font-bold">
                <div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>
                Categories
            </span>
            <span className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold font-sans">
                    Browse By Category
                </h1>
                <span className="space-x-2">
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                        Left
                    </button>
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                        Right
                    </button>
                </span>
            </span>

            {/* Carousel Section */}
            <span className="flex">
                <CarouselImage
                    category={true}
                    flash={true}
                    data={[
                        {
                            icon: "/assets/phone.svg",
                            iconHover: "/assets/hoverphone.svg",
                            title: "Phones",
                        },
                        {
                            title: "Computers",
                            iconHover: "/assets/hovercomputer.svg",
                            icon: "/assets/computer.svg",
                        },
                        {
                            icon: "/assets/smartwatch.svg",
                            iconHover: "/assets/hoversmartwatch.svg",
                            title: "SmartWatch",
                        },
                        {
                            icon: "/assets/camera.svg",
                            iconHover: "/assets/hovercamera.svg",
                            title: "Camera",
                        },
                        {
                            icon: "/assets/headphone.svg",
                            iconHover: "/assets/hoverheadphone.svg",
                            title: "HeadPhones",
                        },
                        {
                            icon: "/assets/gamepad.svg",
                            iconHover: "/assets/hovergamepad.svg",
                            title: "Gaming",
                        },
                    ]}
                />
            </span>

            {/* Optional "View All Products" Button */}
            {/* Uncomment this block if needed */}
            {/* <span className="text-center">
        <button className="bg-tertiary px-6 py-3 text-white rounded">
          View All Products
        </button>
      </span> */}
        </div>
    );
};

export default Category;
