"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

// Combine Motion props with our Button props, omitting overlapping types if necessary
type CombinedButtonProps = ButtonProps & HTMLMotionProps<"button">;

export function Button({
    className = '',
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: CombinedButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cafe-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative overflow-hidden";

    const variants = {
        primary: "bg-[#A31D1D] text-white hover:bg-[#C52323] shadow-lg hover:shadow-[#A31D1D]/20",
        secondary: "bg-white text-cafe-900 border border-cafe-200 hover:bg-cafe-50 hover:border-cafe-300",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "hover:bg-cafe-100 text-cafe-800",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
    };

    return (
        <motion.button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
