import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      
      <Image
        className="w-full h-60 object-cover"
        alt={destinationName}
        src={imageUrl}
        width={400}
        height={300}
      />

      
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

        <Link href={`/destinations/${_id}`}>
        <button className="text-cyan-400 font-semibold flex items-center gap-1 hover:underline mt-3">
            BOOK NOW ↗
          </button>
        </Link> 
      </div>
    </div>
  );
};

export default DestinationCard;