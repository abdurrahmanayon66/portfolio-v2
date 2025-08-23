"use client";

import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden rounded-full">
          <Menu className="h-6 w-6 text-gray-200" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full max-w-full flex flex-col bg-gray-900 border-gray-700">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Abdur Rahman Ayon
          </span>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-6 w-6 text-gray-200" />
            </Button>
          </SheetClose>
        </div>
        <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-medium flex-1">
          <SheetClose asChild>
            <a href="#home" className="text-gray-200 hover:text-blue-600 transition-colors">Home</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#skills" className="text-gray-200 hover:text-blue-600 transition-colors">Skills</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#projects" className="text-gray-200 hover:text-blue-600 transition-colors">Projects</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#contact" className="text-gray-200 hover:text-blue-600 transition-colors">Contact</a>
          </SheetClose>
        </nav>
        <div className="flex items-center justify-center px-6 py-4 border-t border-gray-700">
          <span className="text-gray-500 text-sm">&copy; 2024</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
