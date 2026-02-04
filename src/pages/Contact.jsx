import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Contact = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex flex-col md:flex-row">
            {/* Info Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 bg-primary p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-8">See BerryStudio in Action</h1>
                    <ul className="space-y-6 mb-12">
                        {[
                            "Personalized product walkthrough",
                            "Q&A with a practice management expert",
                            "Custom pricing proposal based on your size"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg text-indigo-50">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white">
                                    <Check size={16} strokeWidth={3} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-indigo-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                        </div>
                        <p className="text-lg italic mb-6 text-indigo-50">"Switching to BerryStudio added 4 hours back to my week. The automation is real."</p>
                        <div>
                            <p className="font-bold">Dr. Sarah Chen</p>
                            <p className="text-sm text-indigo-200">Orthodontist, Bright Smiles</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 bg-white p-8 lg:p-20 flex items-center justify-center relative"
            >
                <div className="w-full max-w-lg">
                    <div className="text-center md:text-left mb-8">
                        <h2 className="text-3xl font-bold text-heading mb-2">Book a Demo</h2>
                        <p className="text-body">Fill out the form below and we'll be in touch shortly.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="First Name" name="firstName" placeholder="Jane" />
                            <Input label="Last Name" name="lastName" placeholder="Doe" />
                        </div>

                        <Input label="Work Email" type="email" name="email" placeholder="jane@practice.com" />
                        <Input label="Practice Name" name="practiceName" placeholder="Bright Smiles Ortho" />
                        <Input label="Phone Number" type="tel" name="phone" placeholder="(555) 123-4567" />

                        <Button fullWidth size="lg" className="mt-4 text-lg h-12 shadow-lg shadow-primary/20">
                            Request Demo
                        </Button>

                        <p className="text-xs text-slate-400 text-center mt-6">
                            By clicking "Request Demo", you agree to our Terms. Your data is secure and encrypted.
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
