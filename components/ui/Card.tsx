"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = true, ...props }: CardProps) {
    return (
        <motion.div
            className={cn(
                "bg-cafe-50 rounded-xl p-6 border border-cafe-100 shadow-sm overflow-hidden relative",
                className
            )}
            initial={hoverEffect ? { y: 0 } : undefined}
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(67, 48, 43, 0.1)" } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={cn("text-xl font-serif font-bold text-cafe-900", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("text-cafe-700", className)} {...props}>{children}</div>;
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("mt-6 flex items-center justify-between", className)} {...props}>{children}</div>;
}
