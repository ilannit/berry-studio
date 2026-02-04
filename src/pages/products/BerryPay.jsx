import React from 'react';
import { CreditCard } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import payMock from '../../assets/analytics-mock.png';

const BerryPay = () => {
    const features = [
        { title: "Automated Collections", desc: "Recurring payments processed without lifting a finger." },
        { title: "Transparent Ledger", desc: "Patients see exactly what they owe and why." },
        { title: "Revenue Reports", desc: "Real-time production and collection analytics." },
        { title: "Text-to-Pay", desc: "Send payment links via SMS for faster collection." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Pay"
            subtitle="A modern financial engine for your practice. Transparent for patients, powerful for you."
            icon={CreditCard}
            colorClass="text-teal-600"
            bgClass="bg-teal-50"
            heroImage={payMock}
            features={features}
        />
    );
};

export default BerryPay;
