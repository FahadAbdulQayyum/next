import React from 'react'
// import Counter from '../Counter'
import { CarouselImage } from '../Carousel'

const GearUp = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center space-y-6">
            {/* <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Today's</span> */}
            <section className="flex flex-col items-center space-y-6">
                <h1 className="text-3xl font-bold font-sans">Gear Up</h1>
                {/* <Counter /> */}
                <div className="flex w-full justify-center space-x-4">
                    <button className="w-1/2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Men</button>
                    <button className="w-1/2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Women</button>
                </div>
            </section>
            <section className="flex flex-wrap justify-between gap-6">
                <CarouselImage flash={true} data={[
                    {
                        image: '/assets/best-nike-1.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-2.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                ]} />
                <CarouselImage flash={true} data={[
                    {
                        image: '/assets/best-nike-1.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-2.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                ]} />
            </section>
        </div >
    )
}

export default GearUp
