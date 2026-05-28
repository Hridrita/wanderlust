"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function Delete({destination}) {
  const {_id, destinationName} = destination;

  const handleDelete = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })

      const data = res.json();
      redirect('/destinations')
      console.log(data);
  }
  return (
    <AlertDialog>
      <Button  className="mt-5 mb-3 rounded-md ml-2" variant="danger"><TrashBin></TrashBin>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}