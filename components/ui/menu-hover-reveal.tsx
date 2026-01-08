"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MenuItem = {
    title: string;
    description: string;
    price: string;
    image: string;
    category: string;
};

export const MenuHoverReveal = ({
    items,
}: {
    items: MenuItem[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Group items by category
    const categories = Array.from(new Set(items.map((item) => item.category)));

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Menu List */}
                <div className="space-y-16">
                    {categories.map((category) => (
                        <div key={category} className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-cafe-900 border-b border-cafe-200 pb-2 inline-block">
                                {category}
                            </h2>
                            <div className="space-y-4">
                                {items.filter(item => item.category === category).map((item, idx) => {
                                    const isHovered = hoveredIndex === items.indexOf(item);

                                    // Handle mobile click interaction
                                    const handleInteraction = () => {
                                        setHoveredIndex(prev => prev === items.indexOf(item) ? null : items.indexOf(item));
                                    };

                                    return (
                                        <motion.div
                                            key={item.title}
                                            onMouseEnter={() => setHoveredIndex(items.indexOf(item))}
                                            onClick={handleInteraction}
                                            className="group cursor-pointer border-b border-dashed border-cafe-100 pb-2 hover:border-cafe-400 transition-colors"
                                        >
                                            <div className="flex justify-between items-baseline">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-cafe-800 group-hover:text-cafe-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-cafe-500 font-light mt-1 hidden sm:block">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <span className="text-lg font-serif font-medium text-cafe-900 ml-4">
                                                    {item.price}
                                                </span>
                                            </div>

                                            {/* Mobile Accordion Reveal - Only visible on mobile */}
                                            <AnimatePresence>
                                                {isHovered && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        className="lg:hidden overflow-hidden"
                                                    >
                                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <p className="text-sm text-cafe-600 mt-2 sm:hidden italic">
                                                            {item.description}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Image Reveal Section (Hidden on mobile, sticky on desktop) */}
                <div className="hidden lg:block relative h-full min-h-[500px]">
                    <div className="sticky top-40 w-full aspect-[4/5] rounded-lg overflow-hidden bg-cafe-50 border border-cafe-100/50 shadow-2xl">
                        <AnimatePresence mode="wait">
                            {hoveredIndex !== null ? (
                                <motion.div
                                    key={items[hoveredIndex].image}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={items[hoveredIndex].image}
                                        alt={items[hoveredIndex].title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-3xl font-serif font-bold">{items[hoveredIndex].title}</h3>
                                        <p className="text-lg text-white/90 font-light mt-2">{items[hoveredIndex].description}</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-cafe-300">
                                    <div className="text-center">
                                        <span className="text-6xl font-serif italic opacity-20">Menu</span>
                                        <p className="text-sm tracking-widest uppercase mt-4 opacity-40">Hover to preview</p>
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};
