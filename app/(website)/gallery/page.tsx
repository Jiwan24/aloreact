"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { Section } from "@/components/ui/Section";
import { GalleryImage } from "@/lib/supabase"; // Temporary type reuse

export default function GalleryPage() {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            const galleryQuery = `*[_type == "gallery"] | order(order asc)`;
            const galleryData = await client.fetch(galleryQuery);

            if (galleryData) {
                const mappedImages = galleryData.map((img: any) => ({
                    ...img,
                    image_url: img.image ? urlFor(img.image).url() : null,
                })).filter((img: any) => img.image_url); // Filter out if no image
                setImages(mappedImages);
            }
            setLoading(false);
        };
        fetchImages();
    }, []);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <Section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-cafe-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Journey</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-cafe-900 mb-6">Our Gallery</h1>
                    <p className="text-xl text-cafe-600 max-w-2xl mx-auto font-light">
                        A glimpse into the daily life, atmosphere, and creations at Alonica.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center p-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cafe-900"></div>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {images.length > 0 ? (
                            images.map((img) => (
                                <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={img.image_url}
                                        alt={img.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <h3 className="text-white font-serif text-xl font-bold">{img.title}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                                <p className="text-gray-500">No images found in gallery. <br />Use the Admin Panel to add some!</p>
                            </div>
                        )}
                    </div>
                )}
            </Section>
        </div>
    );
}
