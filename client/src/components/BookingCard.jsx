"use client";
import { authClient } from "@/lib/auth-client";
import { Card, Button, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {

    const { data: session, isPending, error, refetch } = authClient.useSession();
    const user = session?.user;
    console.log(user);

  const [departureDate, setDepartureDate] = useState(null);
  console.log(new Date (departureDate));



  const handleBooking = async() =>{
    if (!user) {
        toast.error("Please login first to book a destination!");
        return;
    }

    if (!departureDate) {
        toast.error("Please select a departure date!");
        return;
    }
    const bookingData = {
        userId: user?.id,
        userImage: user.image,
        userName: user.name,
        destinationId: destination._id,
        destinationName: destination.destinationName,
        price: destination.price,
        destinationImage: destination.imageUrl,
        departureDate: new Date(departureDate)
    }
    console.log(bookingData);

    const {data:tokenData} = await authClient.token()
    console.log(tokenData);

    const res = await fetch('http://localhost:5000/booking',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },

        body: JSON.stringify(bookingData)
    })

    const data = await res.json();
    console.log(data);
    toast.success("You booked successfully!");
  }

  return (
    <Card className="rounded-none border border-gray-200 p-6 w-full max-w-sm h-fit shadow-sm">
      <p className="text-sm text-gray-600">Starting from</p>
      <h2 className="text-3xl font-bold text-[#00a8c6] my-1">
        ${destination.price}
      </h2>
      <p className="text-sm text-gray-500 mb-6">per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px] mb-3" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking} className="w-full bg-[#00a8c6] text-white font-bold h-12 rounded-none mb-4">
        Book Now →
      </Button>

      <ul className="text-sm text-gray-600 space-y-2">
        <li className="flex items-center gap-2">
          ✓ Free cancellation up to 7 days
        </li>
        <li className="flex items-center gap-2">✓ Travel insurance included</li>
        <li className="flex items-center gap-2">✓ 24/7 customer support</li>
      </ul>
    </Card>
  );
};

export default BookingCard;
