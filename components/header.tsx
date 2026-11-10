"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useStore } from "@/store/store";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  const cart = useStore((store) => store.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Left section: Logo and Nav */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/" className="font-bold text-lg">
            Gourmet
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/menu" className="text-sm font-medium">
              Menu
            </Link>
            <Link href="/admin/menu/create" className="text-sm font-medium">
              Admin
            </Link>
          </nav>
        </div>

        {/* Right section: Search + Cart + Auth */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Search input (hidden on small screens) */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[160px] md:w-[250px]"
            />
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          {/* User Auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          <Link href="/menu" className="block text-sm font-medium">
            Menu
          </Link>
          <Link href="/admin/menu/create" className="block text-sm font-medium">
            Admin
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
