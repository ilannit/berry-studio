import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, date, children }) => {
    return (
        <div className="bg-slate-50 min-h-screen py-24 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                >
                    <div className="bg-slate-50 border-b border-slate-100 p-8 lg:p-12">
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
                        <p className="text-slate-500 text-sm">Last Updated: {date}</p>
                    </div>

                    <div className="p-8 lg:p-12 prose prose-slate max-w-none prose-headings:font-bold prose-a:text-primary">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalLayout;
