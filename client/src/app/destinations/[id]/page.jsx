import { Delete } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } = destination;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <div className="flex justify-end gap-3 mb-6">
        <EditModal destination={destination} />
        <Delete destination={destination} />
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="relative w-full h-[450px]">
          <Image
            alt={destinationName}
            src={imageUrl}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
         
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full w-fit mb-3">
                <LuMapPin />
                <span>{country}</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">{destinationName}</h2>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">${price}</p>
              <span className="text-sm text-gray-500">per person</span>
            </div>
          </div>

          
          <div className="flex items-center gap-6 py-4 border-y border-gray-100 mb-8">
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FaRegCalendar />
              </div>
              <span>{duration}</span>
            </div>
          </div>

          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;