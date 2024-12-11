"use client";

import CustomCategory from '@/components/CustomCategory';
import Image from 'next/image';
import { RiLoader3Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

type ProductType = {
    id: number;
    status: string;
    color: string;
    desc: string;
    category: string;
    image: string;
    title: string;
    price: string;
};

const Products = () => {
    const btns = Array(10).fill({ name: 'Best Selling Products' });

    const data = Array.from({ length: 12 }).map((_, id) => ({
        id,
        status: 'Just In',
        color: '1 Colour',
        desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
        category: "Men's shoe",
        image: '/assets/bsp-1.svg',
        title: 'The north coat',
        price: '8 695.00',
    }));

    const router = useRouter();

    const handleImageClick = (product: ProductType) => {
        const queryString = encodeURIComponent(JSON.stringify(product));
        router.push(`/Products/${product.id}?data=${queryString}`);
    };

    return (
        <div className="px-4 md:px-8 py-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg md:text-xl">New (500)</h1>
                <div className="flex space-x-4 text-sm md:text-base">
                    <p>Hide Filter</p>
                    <p>Sort By</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 py-5">
                <div className="w-full md:w-1/4">
                    <CustomCategory />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {data.map((product: ProductType) => (
                        <div key={product.id} className="border rounded-lg p-4">
                            <div
                                className="cursor-pointer bg-gray-100 rounded-md"
                                onClick={() => handleImageClick(product)}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">{product.status}</p>
                                <p className="font-bold text-lg">{product.title}</p>
                                <p className="text-sm text-gray-400">{product.category}</p>
                                <p className="text-sm text-gray-400">{product.color}</p>
                                <p className="mt-4 font-bold text-lg">{'MRP : ₹' + product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center py-10">
                <RiLoader3Fill className="text-3xl animate-spin" />
            </div>

            <div className="border-t-2 mt-5 pt-5">
                <h1 className="font-bold text-lg md:text-xl">Related Categories</h1>
                <div className="flex flex-wrap gap-3 mt-4">
                    {btns.map((b, i) => (
                        <button
                            key={i}
                            className="border rounded-full text-sm p-2 px-4 hover:bg-gray-100"
                        >
                            {b.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
