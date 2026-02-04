import React from 'react';
import { FileText } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import formsMock from '../../assets/forms-mock.png';

const BerryForms = () => {
    const features = [
        { title: "Mobile Optimized", desc: "Forms look perfect on any device, reducing patient friction." },
        { title: "Auto-Writeback", desc: "Data syncs directly to your PMS. No manual transcription." },
        { title: "Conditional Logic", desc: "Smart forms that show questions only when relevant." },
        { title: "Insurance Verification", desc: "Automated card capture and preliminary checks." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Forms"
            subtitle="The modern intake experience your patients deserve. Gamified, secure, and fully integrated."
            icon={FileText}
            colorClass="text-blue-600"
            bgClass="bg-blue-50"
            heroImage={formsMock}
            features={features}
        />
    );
};

export default BerryForms;
