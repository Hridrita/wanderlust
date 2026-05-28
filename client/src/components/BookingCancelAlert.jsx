"use client";

import {AlertDialog, Button} from "@heroui/react";
import {  TrashBin } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export function BookingCancelAlert({bookingId}) {
    console.log(bookingId);
    
    const handleCancelBooking = async() =>{
      const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        window.location.reload();
        console.log(data);
    }
  return (
    <AlertDialog>
      <Button className="w-full sm:w-auto flex items-center border border-red-500 text-red-500 bg-white"><TrashBin></TrashBin>Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking Permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}