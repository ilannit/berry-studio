import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Activity, CreditCard, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import mobileForms from '../assets/mobile-forms.png';

const Modules = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="bg-white pt-24 pb-20 border-b border-slate-100">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold text-heading mb-6"
                    >
                        A Complete Suite
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-body mb-8"
                    >
                        Everything you need to run a modern orthodontic practice, seamlessly integrated.
                    </motion.p>
                </div>
            </section>

            {/* Feature 1: Forms */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1 lg:order-last"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <img src={mobileForms} alt="Mobile Forms" className="w-full h-auto rounded-xl" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                                <FileText size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Forms</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                Forget clipboards. Our gamified, mobile-first intake forms delight patients
                                and automatically sync data to your practice management system. Reduce waiting room bottlenecks and administrative data entry error.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Mobile-first design for patient convenience",
                                    "Real-time writeback to PMS",
                                    "Automated insurance verification steps"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products/forms">
                                <Button size="lg" variant="outline">Learn more about forms <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature: Tasks - INSERTED HERE */}
            <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-purple-50 h-[400px] flex items-center justify-center border border-purple-100">
                                {/* Placeholder for Task UI */}
                                <div className="absolute inset-x-8 inset-y-12 bg-white rounded-xl shadow-lg p-6 space-y-4">
                                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600/80 font-bold text-xs">AI</div>
                                        <div className="flex-1">
                                            <div className="h-2 w-24 bg-slate-200 rounded"></div>
                                        </div>
                                        <div className="h-6 w-16 bg-green-100 rounded-full"></div>
                                    </div>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-4 py-2">
                                            <div className="w-5 h-5 rounded border border-slate-300"></div>
                                            <div className="h-2 w-full bg-slate-100 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-purple-100/50 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
                                <Activity size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Tasks</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                Orchestrate your practice with AI-driven delegation. Berry Tasks intelligently assigns daily duties,
                                tracks completion, and highlights bottlenecks before they become problems.
                            </p>
                            <Link to="/products/tasks">
                                <Button size="lg" variant="outline">Learn about orchestration <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Plans */}
            <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-[400px] flex items-center justify-center border border-slate-200">
                                <p className="text-slate-400 font-mono text-sm">[Treatment Plan Interactive UI Placeholder]</p>
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-multiply"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-purple-100/50 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
                                <Activity size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Plans</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                Increase case acceptance with visual treatment plans. Show the "Before & After"
                                simulations alongside clear financial options, making it easier for patients to say yes.
                            </p>
                            <Link to="/products/plans">
                                <Button size="lg" variant="outline">See plan examples <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Pay */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1 lg:order-last"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-[400px] flex items-center justify-center border border-slate-800 shadow-xl">
                                <p className="text-slate-500 font-mono text-sm">[Dark Mode Analytics UI Placeholder]</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-teal-100/50 rounded-2xl flex items-center justify-center text-teal-600 mb-8">
                                <CreditCard size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Pay & Reports</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                A transparent ledger for patients and powerful analytics for owners.
                                Track production, collections, and growth in real-time with automated reconciliation.
                            </p>
                            <Link to="/products/pay">
                                <Button size="lg" variant="outline">View analytics <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Modules;
