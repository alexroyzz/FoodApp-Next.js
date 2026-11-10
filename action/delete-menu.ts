"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type DeleteMenuState = {
    success: boolean;
    formError?: string[];
};

export const deleteMenuAction = async (id: string): Promise<DeleteMenuState> => {
    try {
        // Delete the menu item from the database
        await prisma.menuItem.delete({
            where: { id },
        });

        // Revalidate the path to update the cache
        revalidatePath("/admin/menu");

        return { success: true };
    } catch (error) {
        console.error("Failed to delete menu item:", error);
        return {
            success: false,
            formError: ["Failed to delete menu item"],
        };
    }
}
