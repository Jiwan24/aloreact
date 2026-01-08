import Link from 'next/link';
import { Coffee, Facebook, Instagram, Twitter, ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
    return (
        <footer className="bg-cafe-900 text-cafe-100 pt-20 pb-10 border-t border-cafe-800">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-cafe-800 p-2 rounded-full group-hover:bg-cafe-700 transition-colors">
                            <Coffee className="w-6 h-6 text-cafe-300" />
                        </div>
                        <span className="text-4xl font-[family-name:var(--font-sacramento)] font-bold text-white tracking-tight">Alonica Cafe</span>
                    </Link>
                    <p className="text-cafe-300 leading-relaxed text-sm pr-4">
                        Experience the art of coffee in a premium, cozy atmosphere.
                        We serve the finest beans sourced ethically and roasted with passion.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="w-10 h-10 rounded-full bg-cafe-800 flex items-center justify-center hover:bg-cafe-700 hover:text-white transition-all transform hover:-translate-y-1">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-cafe-800 flex items-center justify-center hover:bg-cafe-700 hover:text-white transition-all transform hover:-translate-y-1">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-cafe-800 flex items-center justify-center hover:bg-cafe-700 hover:text-white transition-all transform hover:-translate-y-1">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-serif font-bold text-white text-lg mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm text-cafe-300">
                        <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</Link></li>
                        <li><Link href="/menu" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Menu</Link></li>
                        <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Story</Link></li>
                        <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Careers</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-serif font-bold text-white text-lg mb-6">Visit Us</h4>
                    <ul className="space-y-4 text-sm text-cafe-300">
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-white min-w-[60px]">Address:</span>
                            <span>123 Coffee Street,<br />Cityville, CA 90210</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-white min-w-[60px]">Phone:</span>
                            <span>+62 812 3456 7890</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-white min-w-[60px]">Email:</span>
                            <span>hello@alonicacafe.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-white min-w-[60px]">Hours:</span>
                            <span>Mon - Sun: 8am - 10pm</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-serif font-bold text-white text-lg mb-6">Newsletter</h4>
                    <p className="text-cafe-300 text-sm mb-4">
                        Subscribe to get updates about our latest beans and events.
                    </p>
                    <div className="space-y-3">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-cafe-500" />
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-cafe-800 border border-cafe-700 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-cafe-500 focus:ring-1 focus:ring-cafe-500 placeholder-cafe-500 text-sm"
                            />
                        </div>
                        <Button variant="primary" className="w-full bg-cafe-100 text-cafe-900 hover:bg-white">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-cafe-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-cafe-500">
                <p>© {new Date().getFullYear()} Alonica Cafe. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-cafe-300">Privacy Policy</Link>
                    <Link href="#" className="hover:text-cafe-300">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
