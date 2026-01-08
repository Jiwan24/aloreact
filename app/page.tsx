"use client";

import Image from "next/image";
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Coffee, ArrowRight, Star, Clock, MapPin, Heart, Award } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { WobbleCard } from '@/components/ui/wobble-card';



const products = [
  { title: "Signature Latte", link: "/menu", thumbnail: "/images/coffee-latte.jpg" },
  { title: "Artisan Pastries", link: "/menu", thumbnail: "/images/croissant.jpg" },
  { title: "Cozy Vibes", link: "/about", thumbnail: "/images/cafe-exterior.jpg" },
  { title: "Premium Beans", link: "/menu", thumbnail: "/images/coffee-beans.jpg" },
  { title: "Fresh Brew", link: "/menu", thumbnail: "/images/hero-bg.jpg" },
  { title: "Sweet Delights", link: "/menu", thumbnail: "/images/pastry-display.jpg" },
  { title: "Morning Ritual", link: "/menu", thumbnail: "/images/NAS03011.JPG" },
  { title: "Evening Relax", link: "/menu", thumbnail: "/images/cafe-interior.jpg" },
  { title: "Healthy Bites", link: "/menu", thumbnail: "/images/coffee-cup.jpg" },
  { title: "Local Favorites", link: "/menu", thumbnail: "/images/NAS03011.JPG" },
  { title: "Chef's Special", link: "/menu", thumbnail: "/images/pastry-display.jpg" },
  { title: "Weekend Brunch", link: "/menu", thumbnail: "/images/croissant.jpg" },
  { title: "Community", link: "/about", thumbnail: "/images/hero-bg.jpg" },
  { title: "Work & Study", link: "/about", thumbnail: "/images/cafe-interior.jpg" },
  { title: "Event Space", link: "/contact", thumbnail: "/images/cafe-exterior.jpg" },
];

const testimonials = [
  {
    quote: "The best coffee in town. The atmosphere is unmatched!",
    name: "Sarah J.",
    title: "Coffee Lover",
  },
  {
    quote: "A hidden gem. I love working from here, the wifi is fast and the vibes are chill.",
    name: "Michael T.",
    title: "Freelancer",
  },
  {
    quote: "Their signature latte is to die for. Highly recommended!",
    name: "Jessica L.",
    title: "Foodie",
  },
  {
    quote: "Friendly staff and delicious pastries. My go-to spot on weekends.",
    name: "David R.",
    title: "Local Resident",
  },
  {
    quote: "Simply perfection in a cup. The attention to detail is amazing.",
    name: "Amanda B.",
    title: "Barista",
  },
];

export default function HomePage() {
  "use client";
  return (
    <div className="bg-white">
      <HeroParallax products={products} />



      <Section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <span className="text-cafe-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-cafe-900 mb-6">Experience the Difference</h2>
          <p className="text-xl text-cafe-600 max-w-2xl mx-auto font-light">
            More than just coffee. It's about the moment, the flavor, and the feeling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-cafe-900 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Premium Beans Sourced Globally
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                We travel the world to find the best beans, roasting them to perfection right here in our cafe.
              </p>
            </div>
            <Image
              src="/images/NAS03011.JPG"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-cafe-800">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Expertly Brewed
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Our baristas are champions of their craft, ensuring every cup is a masterpiece.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-cafe-700">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                A Cozy, Inspiring Ambience
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Whether you're working, reading, or catching up with friends, our space is designed for comfort.
              </p>
            </div>
            <Image
              src="/images/cafe-interior.jpg"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </Section>

      {/* Testimonials Section */}


      <Section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-cafe-900 text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Come Visit Us</h2>
              <p className="text-xl md:text-2xl text-cafe-200 mb-10 max-w-2xl mx-auto font-light">
                We are open daily from 7am to 9pm. <br />
                Experience the magic of Alonica.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-cafe-900 rounded-full px-10 py-6 text-lg">
                  Get Directions
                </Button>
              </Link>
            </div>
            {/* Abstract background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-cafe-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cafe-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </Section>
    </div>
  );
}
