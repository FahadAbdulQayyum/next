import React from 'react';
import { CarouselImage } from '../Carousel';

const Essential = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center space-y-6">
            <span className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">The Essentials</h1>
            </span>
            <span className="flex">
                <CarouselImage
                    flash={true}
                    essential={true}
                    data={[
                        {
                            icon: '/assets/essential-1.svg',
                            title: 'Nike Air Max Pulse',
                            category: 'Men\'s',
                            price: '13 995',
                        },
                        {
                            icon: '/assets/essential-2.svg',
                            title: 'Nike Air Max Pulse',
                            category: 'Women\'s',
                            price: '13 995',
                        },
                        {
                            icon: '/assets/essential-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: 'Kids\'',
                            price: '13 995',
                        }
                    ]}
                />
            </span>
            {/* Uncomment if you need the "View All Products" button */}
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
            </span> */}
        </div>
    );
};

export default Essential;
