"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { MdEdit } from "react-icons/md";

export function EditModal({ destination }) {
  const {
    _id, imageUrl, price, destinationName, duration, 
    country, description, category, departureDate
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    });
  };

  return (
    <Modal>
      <Button variant="secondary" className="rounded-xl mt-5 mb-3 flex items-center font-semibold">
        <MdEdit size={18} />
        Edit
      </Button>
      
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl rounded-3xl overflow-hidden">
            <Modal.Header className="px-8 pt-8 pb-2">
              <Modal.Heading className="text-2xl font-bold">Edit Destination</Modal.Heading>
            </Modal.Header>
            
            <Modal.Body className="px-8 pb-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField defaultValue={destinationName} name="destinationName" isRequired>
                      <Label className="font-medium text-gray-700">Destination Name</Label>
                      <Input placeholder="Bali Paradise" className="rounded-xl mt-1" />
                    </TextField>
                  </div>

                  {/* Country & Category */}
                  <TextField defaultValue={country} name="country" isRequired>
                    <Label className="font-medium text-gray-700">Country</Label>
                    <Input placeholder="Indonesia" className="rounded-xl mt-1" />
                  </TextField>

                  <div className="flex flex-col">
                    <Label className="font-medium text-gray-700 mb-1">Category</Label>
                    <Select defaultValue={category} name="category" isRequired className="w-full">
                      <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((cat) => (
                            <ListBox.Item key={cat} id={cat}>{cat}</ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Price & Duration */}
                  <TextField defaultValue={price} name="price" type="number" isRequired>
                    <Label className="font-medium text-gray-700">Price (USD)</Label>
                    <Input type="number" placeholder="1299" className="rounded-xl mt-1" />
                  </TextField>

                  <TextField defaultValue={duration} name="duration" isRequired>
                    <Label className="font-medium text-gray-700">Duration</Label>
                    <Input placeholder="7 Days / 6 Nights" className="rounded-xl mt-1" />
                  </TextField>

                  {/* Departure Date & Image */}
                  <div className="md:col-span-2">
                    <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                      <Label className="font-medium text-gray-700">Departure Date</Label>
                      <Input type="date" className="rounded-xl mt-1" />
                    </TextField>
                  </div>

                  <div className="md:col-span-2">
                    <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                      <Label className="font-medium text-gray-700">Image URL</Label>
                      <Input type="url" placeholder="https://example.com/image.jpg" className="rounded-xl mt-1" />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField defaultValue={description} name="description" isRequired>
                      <Label className="font-medium text-gray-700">Description</Label>
                      <TextArea placeholder="Describe the experience..." className="rounded-xl mt-1 min-h-[100px]" />
                    </TextField>
                  </div>
                </div>

                <Modal.Footer className="flex justify-end gap-3 pt-4">
                  <Button slot="close" variant="secondary" className="rounded-xl">Cancel</Button>
                  <Button type="submit" slot="close" className="rounded-xl bg-cyan-600 text-white">Save Changes</Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}