import DestinationCard from "../../components/DestinationCard"

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Explore All Destinations
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find your perfect travel experience from our curated collection, 
                    designed to offer you the best journey of your life.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    destinations.map(des => (
                        <DestinationCard key={des._id} destination={des} />
                    ))
                }
            </div>
        </div>
    );
};

export default DestinationPage;