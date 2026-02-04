import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Activity, FileText, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import dashboardHero from '../assets/dashboard-hero.png';

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
                                Now with AI-powered Scheduling
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Practice management <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                                    reimagined with AI
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                BerryStudio automates the busywork so you can focus on clinical excellence.
                                Modern, calm, and HIPAA compliant software for the next generation of orthodontists.
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
                                <span>Trusted by 500+ Practices</span>
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
                                        <p className="text-xs text-slate-500">Revenue Growth</p>
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why BerryStudio?</h2>
                        <p className="text-slate-600">The clear choice for modern practices.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <h3 className="text-xl font-semibold text-slate-500 mb-6">The Old Way</h3>
                            <ul className="space-y-4">
                                {['Clunky, dated interfaces', 'Expensive server maintenance', 'Disjointed 3rd party tools', 'Slow support response'].map((item, i) => (
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
                                {['Modern, intuitive AI interface', 'Secure Cloud-Native (AWS)', 'All-in-one suite', 'Dedicated Success Manager'].map((item, i) => (
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

            {/* Bento Grid Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need</h2>
                        <p className="text-slate-600 max-w-xl">
                            A comprehensive operating system for your practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Berry Forms */}
                        <Card className="bg-blue-50/50 border-blue-100 h-full" hoverable>
                            <div className="flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                    <FileText />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Berry Forms</h3>
                                <p className="text-slate-600 mb-6 flex-grow">Gamified patient intake forms that actually get filled out. Mobile-optimized and automatically synced.</p>

                                <div className="mt-auto">
                                    <div className="bg-white border border-blue-100 rounded-lg p-4 mb-4 shadow-sm">
                                        {/* Abstract UI representation simplified */}
                                        <div className="h-2 w-1/2 bg-slate-100 rounded mb-2"></div>
                                        <div className="h-2 w-3/4 bg-slate-100 rounded mb-2"></div>
                                        <div className="h-8 w-24 bg-blue-500 rounded mt-2 opacity-20"></div>
                                    </div>
                                    <Link to="/modules"><Button variant="link" className="px-0">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                                </div>
                            </div>
                        </Card>

                        {/* Berry Tasks */}
                        <Card className="bg-purple-50/50 border-purple-100 h-full" hoverable>
                            <div className="flex flex-col h-full">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                    <Activity />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Berry Tasks</h3>
                                <p className="text-slate-600 mb-6 flex-grow">AI-driven task management for your entire clinical and admin team. Auto-delegation based on role and availability.</p>
                                <div className="mt-auto">
                                    <Link to="/modules"><Button variant="link" className="px-0">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                                </div>
                            </div>
                        </Card>

                        {/* Berry Pay */}
                        <Card className="bg-teal-50/50 border-teal-100 h-full" hoverable>
                            <div className="flex flex-col h-full">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-6">
                                    <CreditCard />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Berry Pay</h3>
                                <p className="text-slate-600 mb-6 flex-grow">Transparent ledger and automated payment collection. Reduce AR days with smart reminders.</p>
                                <div className="mt-auto">
                                    <Link to="/modules"><Button variant="link" className="px-0">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                                </div>
                            </div>
                        </Card>

                        {/* Berry Plans - Converted to Light Theme to match others */}
                        <Card className="bg-slate-50/50 border-slate-200 h-full" hoverable>
                            <div className="flex flex-col h-full">
                                <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-700 mb-6">
                                    <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                                        <div className="bg-current rounded-[1px]"></div>
                                        <div className="bg-current rounded-[1px]"></div>
                                        <div className="bg-current rounded-[1px]"></div>
                                        <div className="bg-current rounded-[1px] opacity-50"></div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Berry Plans</h3>
                                <p className="text-slate-600 mb-6 flex-grow">Visual case presentation tools clearly explained. Increase acceptance rates with interactive simulations.</p>

                                <div className="mt-auto">
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        <div className="h-16 bg-slate-200 rounded-lg"></div>
                                        <div className="h-16 bg-slate-200 rounded-lg"></div>
                                    </div>
                                    <Button variant="outline" className="w-full">See Examples</Button>
                                </div>
                            </div>
                        </Card>
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
                        className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Ready to upgrade your practice?
                    </motion.h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Join the forward-thinking orthodontists leading the future with BerryStudio.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                            Get Started Today
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
