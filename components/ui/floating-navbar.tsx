"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Coffee } from "lucide-react";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    // Initial state: visible if at top (progress < 0.05), hidden otherwise until scroll up
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto px-4 md:px-10 py-3 md:py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2 md:space-x-4",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <Link href="/" className="mr-2 md:mr-4 flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Alonica Cafe"
                        width={120}
                        height={40}
                        className="h-8 md:h-10 w-auto object-contain rounded-full"
                        unoptimized
                    />
                </Link>

                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative items-center flex space-x-1 text-cafe-600 hover:text-cafe-900 transition-colors font-medium text-sm"
                        )}
                    >
                        <span className="block sm:hidden px-1">{navItem.icon}</span>
                        <span className="hidden sm:block">{navItem.name}</span>
                    </Link>
                ))}
                <Link href="/contact" className="ml-2 border text-[10px] md:text-xs font-semibold relative border-cafe-200 text-cafe-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-cafe-50 transition-colors uppercase tracking-wider whitespace-nowrap">
                    <span>Book Table</span>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};
