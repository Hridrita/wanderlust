'use client'
import { FieldError, Input, Select, TextField, Label, ListBox, TextArea, Button, Card } from "@heroui/react";

const AddDestination = () => {
    const onSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        console.log(destination);

        const res = await fetch('http://localhost:5000/destination', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(destination)
        })

        const data = await res.json();
        console.log(data);
    }

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800">Add New Destination</h1>
                <p className="text-gray-500 mt-2">Fill in the details to create a new travel experience</p>
            </div>
            
            <Card className="p-2 shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl">
                <form onSubmit={onSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label className="font-semibold text-gray-700">Destination Name</Label>
                                <Input placeholder="e.g. Bali Paradise" className="rounded-xl border-gray-200 mt-1" />
                            </TextField>
                        </div>

                        
                        <TextField name="country" isRequired>
                            <Label className="font-semibold text-gray-700">Country</Label>
                            <Input placeholder="e.g. Indonesia" className="rounded-xl border-gray-200 mt-1" />
                        </TextField>

                        
                        <div>
                            <Label className="font-semibold text-gray-700">Category</Label>
                            <Select name="category" isRequired className="w-full mt-1">
                                <Select.Trigger className="rounded-xl border-gray-200">
                                    <Select.Value placeholder="Select category" />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        {['Beach', 'Mountain', 'City', 'Adventure', 'Cultural', 'Luxury'].map((item) => (
                                            <ListBox.Item key={item} id={item}>{item}</ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        
                        <TextField name="price" type="number" isRequired>
                            <Label className="font-semibold text-gray-700">Price (USD)</Label>
                            <Input type="number" placeholder="1299" className="rounded-xl border-gray-200 mt-1" />
                        </TextField>

                        <TextField name="duration" isRequired>
                            <Label className="font-semibold text-gray-700">Duration</Label>
                            <Input placeholder="e.g. 7 Days / 6 Nights" className="rounded-xl border-gray-200 mt-1" />
                        </TextField>

                        
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label className="font-semibold text-gray-700">Departure Date</Label>
                                <Input type="date" className="rounded-xl border-gray-200 mt-1" />
                            </TextField>
                        </div>

                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label className="font-semibold text-gray-700">Image URL</Label>
                                <Input type="url" placeholder="https://..." className="rounded-xl border-gray-200 mt-1" />
                            </TextField>
                        </div>

                        
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className="font-semibold text-gray-700">Description</Label>
                                <TextArea placeholder="Describe the travel experience..." className="rounded-xl border-gray-200 mt-1 min-h-[120px]" />
                            </TextField>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-6 rounded-2xl transition-all shadow-lg shadow-cyan-200"
                    >
                        Add Destination
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddDestination;