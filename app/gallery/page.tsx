"use client";

import { Section } from "@/components/ui/Section";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import React from "react";

export default function GalleryPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <Section className="py-10">
                <div className="max-w-7xl mx-auto text-center px-4 mb-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6">
                        Our Gallery
                    </h1>
                    <p className="text-xl text-cafe-600 font-light">
                        A visual journey through the Alonica experience.
                    </p>
                </div>

                <ParallaxScroll images={images} />
            </Section>
        </div>
    );
}

const images = [
    "/images/NAS03011.JPG",
    "/images/coffee-latte.jpg",
    "/images/croissant.jpg",
    "/images/cafe-exterior.jpg",
    "/images/coffee-beans.jpg",
    "/images/hero-bg.jpg",
    "/images/pastry-display.jpg",
    "/images/cafe-interior.jpg",
    "/images/coffee-cup.jpg",
    "/images/NAS03011.JPG",
    "/images/coffee-latte.jpg",
    "/images/cafe-exterior.jpg",
];
