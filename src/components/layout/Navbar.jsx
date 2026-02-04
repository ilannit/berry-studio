import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? "text-primary font-semibold" : "text-body hover:text-primary";
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/modules', label: 'Products' },
        { path: '/initiatives', label: 'Initiatives' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-7xl">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="BerryStudio" className="h-8 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn("text-sm font-medium transition-colors", isActive(link.path))}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" className="text-body">Practice Login</Button>
                    <Link to="/contact">
                        <Button>Book a Demo</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn("text-lg font-medium py-2", isActive(link.path))}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                        <Button variant="ghost" className="w-full justify-start text-slate-600">Practice Login</Button>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full">Book a Demo</Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
