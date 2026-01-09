"use client";

import { Section } from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <Section className="py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
                    {/* Left: Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-cafe-600 font-light leading-relaxed">
                                We'd love to hear from you. Whether you have a question about our menu, want to book a table, or just want to say hello.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#A31D1D] p-3 rounded-full shadow-lg shadow-[#A31D1D]/20">
                                    <MapPin className="text-white h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-cafe-900 text-lg mb-1">Location</h3>
                                    <p className="text-cafe-600">123 Coffee Street, Jakarta</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#A31D1D] p-3 rounded-full shadow-lg shadow-[#A31D1D]/20">
                                    <Phone className="text-white h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-cafe-900 text-lg mb-1">Phone</h3>
                                    <p className="text-cafe-600">+62 812 3456 7890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#A31D1D] p-3 rounded-full shadow-lg shadow-[#A31D1D]/20">
                                    <Mail className="text-white h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-cafe-900 text-lg mb-1">Email</h3>
                                    <p className="text-cafe-600">hello@alonica.cafe</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#A31D1D] p-3 rounded-full shadow-lg shadow-[#A31D1D]/20">
                                    <Clock className="text-white h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-cafe-900 text-lg mb-1">Hours</h3>
                                    <p className="text-cafe-600">Mon-Sun: 7AM - 9PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form with Beams */}
                    <div className="relative">
                        <div className="relative bg-cafe-50 rounded-2xl p-8 shadow-xl overflow-hidden">
                            <BackgroundBeams />
                            <div className="relative z-10">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
