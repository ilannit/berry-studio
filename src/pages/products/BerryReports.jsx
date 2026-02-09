import React from 'react';
import { BarChart } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import reportsMock from '../../assets/reports-mock.png';

const BerryReports = () => {
    const features = [
        { title: "Real-time Growth Metrics", desc: "Track patient volume and revenue streams instantly." },
        { title: "Customizable Dashboards", desc: "Build views that matter most to your role." },
        { title: "Team Performance Tracking", desc: "Identify top performers and coaching opportunities." },
        { title: "Conversion Funnels", desc: "Visualize where leads drop off and optimize your intake." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Reports"
            subtitle="Manage what you measure with intuitive reports. Turn data into actionable insights."
            icon={BarChart}
            colorClass="text-indigo-600"
            bgClass="bg-indigo-50"
            heroImage={reportsMock}
            features={features}
        />
    );
};

export default BerryReports;
