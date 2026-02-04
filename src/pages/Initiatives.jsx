import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import asanaOrtho from '../assets/asana-ortho.png';

const Initiatives = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-900">
                    <img src={asanaOrtho} alt="Asana Ortho Clinic" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
                    <motion.h1
                        className="text-white text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Beyond Software
                    </motion.h1>
                    <motion.p
                        className="text-slate-200 text-xl lg:text-2xl font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We are building an ecosystem to elevate the orthodontic profession.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-24 relative z-20 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 hover:shadow-teal-900/10 transition-shadow duration-300"
                    >
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-105 transition-transform duration-500">
                                BerryNerd
                            </div>
                        </div>
                        <div className="p-10">
                            <div className="uppercase tracking-widest text-xs font-bold text-indigo-600 mb-4">Education</div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">BerryNerd Education</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                An LMS dedicated to orthodontic staff training. From clinical procedures
                                to front-desk excellence, upskill your team with curated courses from industry leaders.
                            </p>
                            <Button className="w-full">Visit BerryNerd</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 hover:shadow-teal-900/10 transition-shadow duration-300"
                    >
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <img src={asanaOrtho} alt="Asana Ortho Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-10">
                            <div className="uppercase tracking-widest text-xs font-bold text-teal-600 mb-4">Clinic</div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Asana Ortho</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our flagship modern practice. We use what we build. Asana Ortho serves as
                                the testing ground for all BerryStudio innovations before they reach your office.
                            </p>
                            <Button variant="outline" className="w-full">Learn More</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Initiatives;
