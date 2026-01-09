"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MenuHoverReveal } from '@/components/ui/menu-hover-reveal';
import { Section } from '@/components/ui/Section';

const MENU_ITEMS = [
    // Signature Coffee
    { category: "Signature Coffee", title: "Signature Latte", description: "House blend espresso, velvet milk, vanilla bean syrup.", price: "Rp 35.000", image: "/images/NAS03011.JPG" },
    { category: "Signature Coffee", title: "Honey Sea Salt Latte", description: "Espresso, organic honey, sea salt cream.", price: "Rp 38.000", image: "/images/coffee-latte.jpg" },
    { category: "Signature Coffee", title: "Espresso", description: "Single origin Arabica bean shot.", price: "Rp 25.000", image: "/images/hero-bg.jpg" },
    { category: "Signature Coffee", title: "Americano", description: "Espresso with hot water.", price: "Rp 28.000", image: "/images/NAS03011.JPG" },
    { category: "Signature Coffee", title: "Cappuccino", description: "Espresso, steamed milk, heavy foam.", price: "Rp 32.000", image: "/images/cafe-exterior.jpg" },

    // Non-Coffee
    { category: "Non-Coffee", title: "Matcha Latte", description: "Pure Japanese matcha, fresh milk.", price: "Rp 35.000", image: "/images/hero-bg.jpg" },
    { category: "Non-Coffee", title: "Chocolate Supreme", description: "Belgium chocolate, milk, shaved chocolate.", price: "Rp 32.000", image: "/images/NAS03011.JPG" },
    { category: "Non-Coffee", title: "Berry Hibiscus Tea", description: "Hibiscus tea, mixed berries, mint.", price: "Rp 30.000", image: "/images/coffee-latte.jpg" },

    // Pastries
    { category: "Pastries", title: "Butter Croissant", description: "French butter, flaky layers.", price: "Rp 22.000", image: "/images/croissant.jpg" },
    { category: "Pastries", title: "Almond Croissant", description: "Filled with almond cream, topped with almonds.", price: "Rp 28.000", image: "/images/pastry-display.jpg" },
    { category: "Pastries", title: "Chocolate Danish", description: "Flaky pastry with rich chocolate center.", price: "Rp 25.000", image: "/images/croissant.jpg" },
    { category: "Pastries", title: "Cheesecake", description: "New York style cheesecake with strawberry compote.", price: "Rp 35.000", image: "/images/pastry-display.jpg" },
];

export default function MenuPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Editorial Header */}
            <Section className="pb-10 pt-20">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-cafe-500 font-bold tracking-[0.2em] uppercase text-sm mb-4"
                    >
                        Our Selection
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-black mb-8"
                    >
                        The Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-cafe-600 font-light"
                    >
                        Carefully curated to delight your senses. <br className="hidden md:block" />
                        Hover over an item to preview.
                    </motion.p>
                </div>
            </Section>

            <MenuHoverReveal items={MENU_ITEMS} />

            <Section className="bg-cafe-50 mt-20">
                <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-cafe-900 mb-4">Dietary Information</h3>
                    <p className="text-cafe-600 max-w-2xl mx-auto">
                        We offer oat milk and almond milk alternatives (+Rp 5.000).
                        Please inform our staff if you have any allergies.
                    </p>
                </div>
            </Section>
        </div>
    );
}
