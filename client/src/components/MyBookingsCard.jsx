import { Eye, TrashBin } from "@gravity-ui/icons";
import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BookingCancelAlert } from "./BookingCancelAlert";

export function MyBookingsCard({booking}) {
    const {destinationId} = booking;
  return (
    <Card className="min-w-4xl flex flex-row items-center p-6 gap-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
        width={300}
        height={300}
          alt="Cherries"
          className="relative h-[160px] w-[250px] shrink-0 overflow-hidden rounded-xl"
          loading="lazy"
          src={booking.destinationImage}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-3xl mb-2">{booking.destinationName}</Card.Title>
          <Card.Description>
            {new Date (booking.departureDate).toLocaleDateString(
                "en-US",{
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            )}
            
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className=" text-3xl font-medium text-[#00a8c6] my-1">${booking.price}</span>
            
          </div>
          <div className="flex gap-1">

            <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>

            <Link href={`/destinations/${destinationId}`}>
            <Button className="w-full sm:w-auto flex items-center bg-[#00a8c6] text-white"><Eye></Eye>View</Button>
            </Link>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
}