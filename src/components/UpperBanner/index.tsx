import Image from 'next/image';
import Link from 'next/link';

const UpperBanner = () => {
    return (
        <div className="bg-primary text-white flex justify-between items-center py-1 px-4">
            <div className="left-portion">
                <Image src={"/assets/nike-logo.svg"} alt={"Nike logo"} width={30} height={30} />
            </div>
            <div className="mid-portion flex space-x-5">
                {/* Add any items or links here if needed */}
            </div>
            <div className="right-portion">
                <ul className="flex space-x-3 text-sm">
                    <li className="border-r border-black pr-4 hover:underline cursor-pointer">Find a Store</li>
                    <li className="border-r border-black pr-4 hover:underline cursor-pointer">Help</li>
                    <li className="border-r border-black pr-4">
                        <Link href="/Sign/up" aria-label="Join Nike Membership">
                            Join Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/Sign/in" aria-label="Sign into your account">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UpperBanner;
