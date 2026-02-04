import React from 'react';
import { Activity } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import plansMock from '../../assets/plans-mock.png';

const BerryPlans = () => {
    const features = [
        { title: "Visual Simulations", desc: "Show Before/After outcomes to drive case acceptance." },
        { title: "Flexible Financing", desc: "Present sliding scale payment options clearly." },
        { title: "One-Click Sign", desc: "Digital signatures handled instantly in the chair." },
        { title: "Treatment Tracking", desc: "Monitor progress against the visual plan." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Plans"
            subtitle="Turn consultations into starts with powerful visual case presentations and flexible financing options."
            icon={Activity}
            colorClass="text-purple-600"
            bgClass="bg-purple-50"
            heroImage={plansMock}
            features={features}
        />
    );
};

export default BerryPlans;
