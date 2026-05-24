import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-8 py-4 shadow-md sticky top-0 z-50">
      
      <ul className="flex gap-6 font-medium text-gray-700">
        <li>
          <Link href={"/"} className="hover:text-blue-600 transition-colors">Home</Link>
        </li>
        <li>
          <Link href={"/destinations"} className="hover:text-blue-600 transition-colors">Destination</Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-blue-600 transition-colors">My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"} className="hover:text-blue-600 transition-colors">Add Destination</Link>
        </li>
      </ul>

      
      <div className="cursor-pointer">
        <Image
          src="/assets/Wanderlast.png"
          height={120}
          width={120}
          alt="logo"
        />
      </div>

      
      <ul className="flex gap-6 items-center font-medium text-gray-700">
        <li>
          <Link href={"/profile"} className="hover:text-blue-600 transition-colors">Profile</Link>
        </li>
        <li>
          <Link href={"/login"} className="hover:text-blue-600 transition-colors">Login</Link>
        </li>
        <li>
          <Link href={"/signup"} className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;