import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  const { _id, imageUrl, price, destinationName, duration, country, description } =
    destination;
  console.log(destination);

  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
            <EditModal destination={destination}></EditModal>
           
        </div>
      <Image
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={800}
        className="w-full h-100 object-cover"
      ></Image>

      <div className="p-4">
        
        <div className="flex items-center gap-1 text-gray-500 mb-2">
          <LuMapPin />
          <span>{country}</span>
        </div>

        
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{destinationName}</h2>
          <h3 className="text-xl font-bold">${price}<span className="text-sm font-normal text-gray-500">/Person</span></h3>
        </div>

        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegCalendar />
            <span>{duration}</span>
          </div>
           
        </div>

        <h1 className="mt-10 text-4xl font-semibold">Overview</h1>

        <p className="text-gray-600">
            {description}
        </p>

        
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
