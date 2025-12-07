import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 p-2'>
            {/* LEFT */}
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Trendy" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9"  />
            <p className="hidden md:block text-md font-medium tracking-wider">TRENDY</p>
            </Link>


            {/* RIGHT */}
        <div>
           <SearchBar/>
        </div>
        </nav>
    );
};

export default Navbar;