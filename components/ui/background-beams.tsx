"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beams = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className={cn(
            "absolute inset-0 overflow-hidden opacity-40 pointer-events-none",
            className
        )}>
            <svg
                className="absolute w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#18CCFC" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#6344F5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#AE48FF" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {beams.map((beam, i) => (
                    <motion.line
                        key={`beam-${i}`}
                        x1={`${(i / beams.length) * 100}%`}
                        y1="0%"
                        x2={`${((i + 1) / beams.length) * 100}%`}
                        y2="100%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
