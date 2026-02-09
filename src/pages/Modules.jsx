import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Activity, CreditCard, ArrowRight, BarChart, Brain } from 'lucide-react';
import Button from '../components/ui/Button';
import mobileForms from '../assets/mobile-forms.png';
import tasksMock from '../assets/tasks-mock.png';
import plansMock from '../assets/plans-mock.png';
import analyticsMock from '../assets/analytics-mock.png';
import reportsMock from '../assets/reports-mock.png';
import nerdMock from '../assets/nerd-mock.png';

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
                            <Link to="/products/forms">
                                <Button size="lg" variant="outline">Learn more about forms <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Tasks */}
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100 bg-white p-2">
                                <img src={tasksMock} alt="Berry Tasks Orchestration" className="w-full h-auto rounded-xl" />
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

            {/* Feature 3: Plans */}
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
                                <img src={plansMock} alt="Treatment Planning UI" className="w-full h-auto rounded-xl" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
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

            {/* Feature 4: Pay */}
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 p-2">
                                <img src={analyticsMock} alt="Financial Analytics Dashboard" className="w-full h-auto rounded-xl" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-teal-100/50 rounded-2xl flex items-center justify-center text-teal-600 mb-8">
                                <CreditCard size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Pay</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                A transparent ledger for patients. Automated collections, recurring payments, and a
                                modern checkout experience that patients trust.
                            </p>
                            <Link to="/products/pay">
                                <Button size="lg" variant="outline">View payment features <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 5: Reports */}
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-indigo-200 bg-white p-2">
                                <img src={reportsMock} alt="Reports Dashboard" className="w-full h-auto rounded-xl object-left-top object-cover" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-indigo-100/50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                                <BarChart size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Reports</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                Powerful analytics for owners. Track production, collections, and growth in real-time.
                                Turn data into actionable insights to grow your practice.
                            </p>
                            <Link to="/products/reports">
                                <Button size="lg" variant="outline">Explore reports <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 6: Nerd */}
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-violet-200 bg-white p-2">
                                <img src={nerdMock} alt="Berry Nerd AI" className="w-full h-auto rounded-xl" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-16 bg-violet-100/50 rounded-2xl flex items-center justify-center text-violet-600 mb-8">
                                <Brain size={32} />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Berry Nerd</h2>
                            <p className="text-lg text-body mb-8 leading-relaxed">
                                Bring your SOPs to life with AI search. An intelligent assistant that helps your
                                team find protocols, scripts, and answers instantly.
                            </p>
                            <Link to="/products/nerd">
                                <Button size="lg" variant="outline">Meet Berry Nerd <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Modules;
