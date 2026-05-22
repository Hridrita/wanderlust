import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-white p-5">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Destination</Link>
        </li>
        <li>
          <Link href={"/"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div>
        <Image
          src="/assets/Wanderlast.png"
          height={150}
          width={150}
          alt="logo"
        ></Image>
      </div>

      <ul className="flex gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/SignUp"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
