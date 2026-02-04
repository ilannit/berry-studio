import React from 'react';
import { CheckSquare } from 'lucide-react';
import ProductDetailLayout from '../../components/layout/ProductDetailLayout';
import tasksMock from '../../assets/tasks-mock.png';

const BerryTasks = () => {
    const features = [
        { title: "Smart Assignment", desc: "AI automatically routes tasks to the right staff member." },
        { title: "Recurring Workflows", desc: "Automate daily opening/closing checklists." },
        { title: "Patient Context", desc: "Tasks linked directly to patient charts for easy reference." },
        { title: "Team Analytics", desc: "Track completion rates and bottlenecks." }
    ];

    return (
        <ProductDetailLayout
            title="Berry Tasks"
            subtitle="Orchestrate your clinical and administrative team with AI-driven task management."
            icon={CheckSquare}
            colorClass="text-amber-600"
            bgClass="bg-amber-50"
            heroImage={tasksMock}
            features={features}
        />
    );
};

export default BerryTasks;
