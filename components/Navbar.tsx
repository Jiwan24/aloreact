"use client";
import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Home, Coffee, Info, Mail, Image } from 'lucide-react';

export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Menu",
            link: "/menu",
            icon: <Coffee className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Gallery",
            link: "/gallery",
            icon: <Image className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
