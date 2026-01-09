"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

export default function AboutPage() {
    return (
        <div className="bg-white pt-32 pb-20">
            <Section className="py-10">
                <div className="max-w-4xl mx-auto text-center px-4 mb-20">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6">Our Story</h1>
                    <TextGenerateEffect words="From a humble bean to your morning ritual. This is the journey of Alonica." className="text-xl md:text-2xl font-light text-cafe-600" />
                </div>

                <TracingBeam className="px-6">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        {dummyContent.map((item, index) => (
                            <div key={`content-${index}`} className="mb-20">
                                <h2 className="bg-[#A31D1D] text-white rounded-full text-sm w-fit px-4 py-1 mb-4 shadow-lg shadow-[#A31D1D]/20">
                                    {item.badge}
                                </h2>

                                <h3 className="text-3xl font-serif font-bold text-cafe-900 mb-4 h-fit">
                                    {item.title}
                                </h3>

                                <div className="text-lg prose prose-sm dark:prose-invert text-cafe-700 mb-6">
                                    {item.description}
                                </div>

                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover shadow-2xl border-4 border-white"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </TracingBeam>
            </Section>
        </div>
    );
}

const dummyContent = [
    {
        title: "The Beginning",
        description: (
            <>
                <p>
                    It started with a trip to the highlands of Gayo. We witnessed the dedication of local farmers
                    and the meticulous process of picking the perfect cherry. We realized that coffee isn't just a drink,
                    it's a craft.
                </p>
                <p>
                    Alonica was born from a desire to bridge the gap between the farm and the city cup.
                </p>
            </>
        ),
        badge: "2018",
        image: "/images/coffee-beans.jpg",
    },
    {
        title: "Roasting Perfection",
        description: (
            <>
                <p>
                    We spent years mastering the art of roasting. We believe in small batches,
                    carefully monitoring the heat to unlock the unique flavor profile of every bean.
                </p>
                <p>
                    Our roastery became the heart of our operation, filling the neighborhood with the aroma of fresh coffee.
                </p>
            </>
        ),
        badge: "2020",
        image: "/images/hero-bg.jpg",
    },
    {
        title: "The Alonica Experience",
        description: (
            <>
                <p>
                    We opened our doors with a simple mission: to serve the best coffee in a space that feels like home.
                    We designed every corner to be cozy, inspiring, and welcoming.
                </p>
                <p>
                    Today, Alonica is more than a cafe. It's a community.
                </p>
            </>
        ),
        badge: "Present Day",
        image: "/images/NAS03011.JPG",
    },
];
