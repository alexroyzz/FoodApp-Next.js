"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useStore } from "@/store/store";
import type { MenuItem } from "@/lib/generated/prisma";
import Image from "next/image";
import { ImageKitProvider } from "@imagekit/next";

export function MenuItem({ item }: { item: MenuItem }) {
  const addToCart = useStore((store) => store.addToCart);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0 pb-4">
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/vwwosltps">
          <Image
            src={item.image}
            width={400}
            height={400}
            alt="Picture of the author"
            className="w-full h-48 object-cover"
          />
        </ImageKitProvider>
        
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${item.price.toFixed(2)}</span>
        <Button
          onClick={() => addToCart(item)}
          size="sm"
          className="gap-1 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
