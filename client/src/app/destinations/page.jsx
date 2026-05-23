import DestinationCard from "../../components/DestinationCard"

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl mt-12 mb-4">Explore All Destinations</h1>
            <p className="text-gray-500 mb-12">Find your perfect travel experience from our curated collection</p>

            <div className="grid grid-cols-4 gap-5">
                {
                    destinations.map(des => <DestinationCard key={des._id} destination={des}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;