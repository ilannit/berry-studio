import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        We are BerryStudio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        We believe software should be calm, capable, and invisible.
                        Founded by orthodontists and engineers to reclaim your time.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                To build the operating system for the modern orthodontic practice.
                                One that automates the mundane, elevates the clinical, and delights the patient.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We are tired of legacy software that feels like a burden.
                                BerryStudio is our answer: a suite that works for you, not the other way around.
                            </p>
                        </div>
                        <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                            <h3 className="font-bold text-teal-800 mb-4">The Berry Standard</h3>
                            <ul className="space-y-4">
                                {['Zero training required', 'Medical-grade security', 'Beautiful by default', 'Always fast'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-teal-700">
                                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Join the movement</h2>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">View Careers</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
