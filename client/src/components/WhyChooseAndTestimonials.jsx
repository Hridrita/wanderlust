import React from 'react';
import { ShieldCheck, Map, Headphones } from 'lucide-react'; 

const WhyChoose = () => {
    return (
        <section className="bg-blue-50 py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Why Choose Wanderlust</h2>
                <p className="text-gray-600 mb-12">Your trusted partner for exceptional travel experiences.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <ShieldCheck className="mx-auto text-blue-600 mb-4" size={40} />
                        <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
                        <p className="text-gray-600 text-sm">Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <Map className="mx-auto text-blue-600 mb-4" size={40} />
                        <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
                        <p className="text-gray-600 text-sm">Local experts who bring destinations to life with authentic cultural insights.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <Headphones className="mx-auto text-blue-600 mb-4" size={40} />
                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">Reach our dedicated customer service to assist you wherever your journey takes you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">What Travelers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="border rounded-2xl p-6 flex gap-6 items-center">
                    <p className="text-gray-600 text-sm italic">"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned..."</p>
                    <div className="text-center min-w-[80px]">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                        <h4 className="font-bold text-sm">Michael Chen</h4>
                    </div>
                </div>
                
                <div className="border rounded-2xl p-6 flex gap-6 items-center">
                    <p className="text-gray-600 text-sm italic">"Swiss Alps Adventure exceeded all expectations. The Mountain Views Were Breathtaking..."</p>
                    <div className="text-center min-w-[80px]">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                        <h4 className="font-bold text-sm">Sarah Johnson</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};


export { WhyChoose, Testimonials };