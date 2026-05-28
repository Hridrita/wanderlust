import BookingCard from "@/components/BookingCard";
import { Delete } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import { Card } from "@heroui/react";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token);


  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const destination = await res.json();

  const { imageUrl, destinationName, duration, country, description } = destination;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      
      <div className="flex justify-end gap-3 mb-6">
        <EditModal destination={destination} />
        <Delete destination={destination} />
      </div>

      
      <div className="relative w-full h-[450px] mb-8 overflow-hidden rounded-2xl">
        <Image
          alt={destinationName}
          src={imageUrl}
          fill
          className="object-cover"
        />
      </div>

      
      <div className="flex flex-col lg:flex-row gap-10">
        
        
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full w-fit">
              <LuMapPin />
              <span>{country}</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">{destinationName}</h2>
            
            <div className="flex items-center gap-2 text-gray-600 font-medium border-t border-b py-4">
              <FaRegCalendar className="text-xl" />
              <span>{duration}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>

        
        <div className="lg:w-1/3">
          <BookingCard destination={destination} />
        </div>
        
      </div>
    </div>
  );
};

export default DestinationDetailsPage;