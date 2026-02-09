import React from 'react';
import { Brain } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import nerdMock from '../../assets/nerd-mock.png';

const BerryNerd = () => {
    const features = [
        { title: "AI-powered Knowledge Base", desc: "Ask questions in plain English and get instant answers." },
        { title: "Instant SOP Retrieval", desc: "Find the right procedure document in seconds." },
        { title: "Onboarding Assistant", desc: "Help new staff ramp up faster with contextual guides." },
        { title: "Policy Compliance Checks", desc: "Ensure your team is always following the latest protocols." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Nerd"
            subtitle="Bring your SOPs to life with AI search. No more digging through dusty binders."
            icon={Brain}
            colorClass="text-violet-600"
            bgClass="bg-violet-50"
            heroImage={nerdMock}
            features={features}
        />
    );
};

export default BerryNerd;
