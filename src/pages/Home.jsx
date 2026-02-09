import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Activity, FileText, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import dashboardHero from '../assets/dashboard-hero.png';
import mobileForms from '../assets/mobile-forms.png';
import tasksMock from '../assets/tasks-mock.png';
import plansMock from '../assets/plans-mock.png';
import analyticsMock from '../assets/analytics-mock.png';
import reportsMock from '../assets/reports-mock.png';
import nerdMock from '../assets/nerd-mock.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
                {/* Background Mesh Gradient */}
                <div className="absolute inset-0 -z-10 mesh-gradient opacity-60"></div>

                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        <motion.div
                            className="flex-1 text-center lg:text-left z-10"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-primary mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                Now serving US and Canada
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold tracking-tight text-heading mb-6 leading-[1.1]">
                                The Easiest New Patient <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                                    Intake Tool Alive
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-body mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                BerryStudio allows independent dental providers to welcome patients with the most convenient experience and highest efficiency.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact">
                                    <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-teal-200/50 shadow-lg">
                                        Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link to="/modules">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12">
                                        Explore Features
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-400 grayscale opacity-70">
                                {/* Trusted By Logos Placeholder */}
                                <span>Trusted by 50+ Practices</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex-1 relative"
                            initial={{ opacity: 0, x: 50, rotateY: 10 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white/50 backdrop-blur-xl">
                                <img src={dashboardHero} alt="BerryStudio Dashboard" className="w-full h-auto object-cover" />

                                {/* Floating Element 1 */}
                                <motion.div
                                    className="absolute -left-6 bottom-12 bg-white p-4 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">At-home contracts</p>
                                        <p className="text-sm font-bold text-slate-900">+24% this month</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Blur behind image */}
                            <div className="absolute top-1/2 left-1/2 -ml-1/2 -mt-1/2 w-[120%] h-[120%] bg-teal-500/20 blur-[100px] -z-10 rounded-full"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-heading mb-4">Why BerryStudio?</h2>
                        <p className="text-body">As convenient as paper-workflows | On your PC</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <h3 className="text-xl font-semibold text-slate-500 mb-6">The Old Way</h3>
                            <ul className="space-y-4">
                                {['High processing fee for cards', 'Multiple steps; less accountability', 'Designed for paper or iPads', 'Clutter on the screen'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-500">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 text-xs font-bold">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white border-2 border-primary/10 shadow-xl shadow-teal-900/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 bg-primary/10 rounded-bl-xl text-primary font-bold text-xs uppercase tracking-wide">
                                Recommended
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-6">The Berry Way</h3>
                            <ul className="space-y-4">
                                {['0% added fees for card transactions', 'Automate steps; track everything', 'Designed for the mobile phones', 'Clean, intuitive interfaces'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-primary text-xs font-bold">
                                            <Check size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section - Refactored Layout */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">Everything You Need</h2>
                        <p className="text-xl text-body">
                            Your staff’s efficiency is as good as the software you give them. Raise the bar with BerryStudio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {/* Berry Forms */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Forms</h3>
                                <p className="text-lg text-body text-slate-600">Gamified mobile friendly forms patients love to fill</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-xl shadow-blue-900/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px]">
                                    <img
                                        src={mobileForms}
                                        alt="BerryForms Mobile Interface"
                                        className="w-full h-auto max-w-[300px] rounded-2xl shadow-lg transform transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Berry Plans */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Plans</h3>
                                <p className="text-lg text-body text-slate-600">The only case acceptance tool that combines patient education with payments</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-xl shadow-purple-900/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px]">
                                    <img
                                        src={plansMock}
                                        alt="BerryPlans Interface"
                                        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Berry Tasks */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Tasks</h3>
                                <p className="text-lg text-body text-slate-600">Visual task management for all your workflows</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50/50 to-indigo-50/50 border border-indigo-100 shadow-xl shadow-indigo-900/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px]">
                                    <img
                                        src={tasksMock}
                                        alt="BerryTasks Interface"
                                        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-700 group-hover:translate-y-[-10px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Berry Pay */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Pay</h3>
                                <p className="text-lg text-body text-slate-600">0% processing fee and automated ledgers</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl shadow-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px]">
                                    <img
                                        src={analyticsMock}
                                        alt="BerryPay Analytics Interface"
                                        className="w-full h-auto rounded-xl shadow-2xl opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Berry Reports */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Reports</h3>
                                <p className="text-lg text-body text-slate-600">Manage what you measure with intuitive reports</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-teal-50 to-sky-50 border border-teal-100 shadow-xl shadow-teal-900/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px] overflow-hidden">
                                    <img
                                        src={reportsMock}
                                        alt="Berry Reports Interface"
                                        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-700 group-hover:scale-105 object-left-top object-cover scale-110"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Berry Nerd */}
                        <div className="group">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-heading mb-2">Berry Nerd</h3>
                                <p className="text-lg text-body text-slate-600">Bring your SOPs to life with AI search</p>
                            </div>
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 shadow-xl shadow-indigo-900/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
                                <div className="p-8 sm:p-12 flex items-center justify-center min-h-[400px] overflow-hidden">
                                    <img
                                        src={nerdMock}
                                        alt="Berry Nerd Interface"
                                        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/modules">
                            <Button variant="outline" size="lg" className="rounded-full px-8">
                                Explore all features <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold text-heading mb-6"
                    >
                        Ready to start more patients?
                    </motion.h2>
                    <p className="text-xl text-body mb-10 max-w-2xl mx-auto">
                        Join the forward-thinking dentists leading the future with BerryStudio
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                            Get Started today
                        </Button>
                    </Link>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-50"></div>
            </section>
        </div>
    );
};

export default Home;
