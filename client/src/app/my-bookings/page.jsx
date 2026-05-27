import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

  const data = await res.json();
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-semibold text-3xl">My Bookings</h1>
    </div>
  );
};

export default MyBookingPage;
