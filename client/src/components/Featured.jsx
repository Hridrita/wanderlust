import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";

const Featured = async () => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const destinations = await res.json();

    return (
        <div className='mt-16 mx-auto max-w-7xl px-4'>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-3xl font-bold text-gray-900'>Featured Destinations</h1>
                <Link href="/destinations" className="text-blue-600 font-semibold hover:underline">
                    All Destinations →
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {destinations?.map((item) => (
                    <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition duration-300">
                        
                        <div className="relative w-full h-60">
                            <Image 
                                src={item.imageUrl} 
                                alt={item.destinationName} 
                                fill 
                                className="object-cover"
                            />
                        </div>

                        
                        <div className="p-5">
                            <div className="flex items-center gap-1 text-gray-500 mb-2">
                                <LuMapPin size={16} />
                                <span className="text-sm">{item.country}</span>
                            </div>
                            
                            <h2 className="text-xl font-bold mb-2">{item.destinationName}</h2>
                            
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FaRegCalendar size={16} />
                                    <span className="text-sm">{item.duration}</span>
                                </div>
                                <p className="text-blue-600 font-bold">${item.price} <span className="text-gray-400 text-sm font-normal">/Person</span></p>
                            </div>

                            <Link href={`/destinations/${item._id}`}>
                                <button className="w-full mt-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;