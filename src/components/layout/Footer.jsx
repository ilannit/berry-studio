import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12 mt-auto text-sm">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <span className="text-xl font-bold text-white block mb-2 tracking-tight">BerryStudio</span>
                        <p className="text-slate-500">Practice management reimagined.</p>
                    </div>

                    {/* Compact Navigation */}
                    <div className="flex flex-wrap gap-8 md:gap-16">
                        <div>
                            <h4 className="font-semibold text-white mb-3">Product</h4>
                            <ul className="space-y-2">
                                <li><Link to="/products/forms" className="hover:text-white transition-colors">Forms</Link></li>
                                <li><Link to="/products/tasks" className="hover:text-white transition-colors">Tasks</Link></li>
                                <li><Link to="/products/plans" className="hover:text-white transition-colors">Plans</Link></li>
                                <li><Link to="/products/pay" className="hover:text-white transition-colors">Pay</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Company</h4>
                            <ul className="space-y-2">
                                <li><Link to="/company/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link to="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><Link to="/initiatives" className="hover:text-white transition-colors">Initiatives</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Legal</h4>
                            <ul className="space-y-2">
                                <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link to="/legal/terms" className="hover:text-white transition-colors">Terms</Link></li>
                                <li><Link to="/legal/hipaa" className="hover:text-white transition-colors">HIPAA</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} BerryStudio Inc.</p>

                    <div className="flex gap-4 items-center">
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>

                        <div className="h-4 w-px bg-slate-800 mx-2 hidden md:block"></div>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-medium text-green-500">Systems Normal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
