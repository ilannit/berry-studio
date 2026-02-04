import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const Careers = () => {
    const roles = [
        { title: "Senior Frontend Engineer", location: "Remote", type: "Full-time" },
        { title: "Product Designer", location: "New York, NY", type: "Full-time" },
        { title: "Sales Executive", location: "Remote", type: "Full-time" },
        { title: "Customer Success Manager", location: "Austin, TX", type: "Full-time" }
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-32 pb-20 bg-slate-900 border-b border-slate-800 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Build the future of digital health
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Join a team of obsessive craftsmen building the best-in-class software for orthodontics.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Open Positions</h2>

                    <div className="space-y-4">
                        {roles.map((role, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group bg-white">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{role.title}</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-1">
                                        <span>{role.location}</span>
                                        <span>•</span>
                                        <span>{role.type}</span>
                                    </div>
                                </div>
                                <Button variant="outline">Apply Now</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
