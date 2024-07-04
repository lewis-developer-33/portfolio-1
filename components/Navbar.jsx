"use client"
import Link from "next/link";
import { logo } from "@/public/images";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <Image
        width={100}
        height={100}
         src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </Link>
        <Link href='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
