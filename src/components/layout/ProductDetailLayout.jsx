import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ProductDetailLayout = ({
    title,
    subtitle,
    icon: Icon,
    colorClass = "text-primary",
    bgClass = "bg-teal-50",
    heroImage,
    features = [],
    children
}) => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className={`pt-32 pb-20 ${bgClass} border-b border-white/50`}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClass} bg-white shadow-sm mb-8`}>
                                {Icon && <Icon size={32} />}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                                {subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button size="lg" className="shadow-lg">Book a Demo</Button>
                                </Link>
                                <Link to="/modules">
                                    <Button variant="outline" size="lg">All Products</Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1 w-full"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {heroImage ? (
                                <img src={heroImage} alt={title} className="rounded-2xl shadow-2xl border border-white/50 w-full" />
                            ) : (
                                <div className="h-[400px] w-full bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 text-slate-400">
                                    [Product Visual Placeholder]
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Capabilities</h2>
                        <p className="text-slate-600">Why leading practices choose {title}.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} ${colorClass} mb-6`}>
                                    <Check size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {children}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to streamline your practice?</h2>
                    <Link to="/contact">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get Started with {title}</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailLayout;
