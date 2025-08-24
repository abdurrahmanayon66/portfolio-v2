"use client";

import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineFileText, AiOutlineCode } from "react-icons/ai";
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
            <a href="#home" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineHome className="text-xl" />
              Home
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#about" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineUser className="text-xl" />
              About
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#skills" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineCode className="text-xl" />
              Skills
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#projects" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineProject className="text-xl" />
              Projects
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#resume" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineFileText className="text-xl" />
              Resume
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#contact" className="text-gray-200 hover:text-blue-600 transition-colors flex items-center gap-3">
              <AiOutlineMail className="text-xl" />
              Contact
            </a>
          </SheetClose>
        </nav>
        <div className="flex items-center justify-center px-6 py-4 border-t border-gray-700">
          <span className="text-gray-500 text-sm">&copy; 2024</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
