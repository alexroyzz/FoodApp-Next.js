"use client";

import React, { useActionState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteMenuAction, type DeleteMenuState } from "@/action/delete-menu";
 
type Props = {
  id: string;
};

const DeleteMenuButton = ({ id }: Props) => {
  const [, action, isPending] = useActionState<DeleteMenuState, FormData>(
    () => deleteMenuAction(id),
    { success: false }
  );

  return (
    <form action={action}>
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="text-destructive"
        disabled={isPending}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default DeleteMenuButton;
