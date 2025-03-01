"use client";

// UI components
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../dropdown-menu";
import { Button } from "../button";

// Icon
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const {setTheme}=useTheme();
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                <SunIcon className="h[1.4rmm] w-1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <MoonIcon className="absolute h[1.4rmm] w-1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-110"/>
                <span className="sr-only">Toggle Theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={()=>setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setTheme('system')}>System</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>;
}