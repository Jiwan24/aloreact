"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Message sent! We will get back to you soon.');
    };

    return (
        <div className="bg-cafe-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-cafe-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cafe-700 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-cafe-200 focus:outline-none focus:ring-2 focus:ring-cafe-400 bg-white"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cafe-700 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-cafe-200 focus:outline-none focus:ring-2 focus:ring-cafe-400 bg-white"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cafe-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-cafe-200 focus:outline-none focus:ring-2 focus:ring-cafe-400 bg-white"
                        placeholder="How can we help you?"
                        required
                    ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
                {status && <p className="text-green-600 text-sm text-center">{status}</p>}
            </form>
        </div>
    );
}

export default ContactForm;
