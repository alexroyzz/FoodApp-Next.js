// app/menu/page.tsx
import { MenuList } from "@/components/menu/menu-list";
import { MenuSkeleton } from "@/components/menu/menu-skeleton";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function MenuPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="gap-4 mb-8">
        <h1 className="text-3xl font-bold">Our Menu</h1>
      </div>
      <Suspense fallback={<MenuSkeleton />}>
        <MenuList />
      </Suspense>
    </div>
  );
}
