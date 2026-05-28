import { MyBookingsCard } from "@/components/MyBookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);

  const {token} = await auth.api.getToken({
    headers: await headers()
  })



  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-semibold text-3xl mb-5 mt-8">My Bookings</h1>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <MyBookingsCard booking={booking} key={booking._id}></MyBookingsCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
