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

            {/* Meet the Team Section */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-heading mb-4">Meet the Team</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            We are a diverse group of designers, engineers, and problem solvers passionate about transforming healthcare.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Sarah Jenkins", role: "CEO & Co-Founder" },
                            { name: "David Chen", role: "CTO & Co-Founder" },
                            { name: "Emily Rodriguez", role: "Head of Product" },
                            { name: "Michael Chang", role: "Lead Engineer" }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[4/5] bg-slate-200 rounded-2xl mb-6 overflow-hidden relative">
                                    {/* Placeholder styling */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        <span className="text-sm font-medium">Photo Placeholder</span>
                                    </div>
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
                                </div>
                                <h3 className="text-xl font-bold text-heading text-center mb-1">{member.name}</h3>
                                <p className="text-sm text-primary font-medium text-center uppercase tracking-wide">{member.role}</p>
                            </div>
                        ))}
                    </div>
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
        </div >
    );
};

export default Careers;
