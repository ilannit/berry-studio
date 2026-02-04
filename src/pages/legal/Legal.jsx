import React from 'react';
import LegalLayout from '../../components/layout/LegalLayout';

export const Privacy = () => (
    <LegalLayout title="Privacy Policy" date="October 24, 2025">
        <p>At BerryStudio, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your information.</p>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact customer support.</p>
        <h2>2. Use of Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, including to process transactions and send you related information.</p>
        <h2>3. Sharing of Information</h2>
        <p>We do not share your personal information with third parties except as described in this policy.</p>
    </LegalLayout>
);

export const Terms = () => (
    <LegalLayout title="Terms of Service" date="October 24, 2025">
        <p>Welcome to BerryStudio. By accessing or using our website, you agree to be bound by these Terms of Service.</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.</p>
        <h2>2. Description of Services</h2>
        <p>BerryStudio provides practice management software for orthodontic practices.</p>
    </LegalLayout>
);

export const Hipaa = () => (
    <LegalLayout title="HIPAA Compliance" date="October 24, 2025">
        <p>BerryStudio is fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA).</p>
        <h2>1. Security Measures</h2>
        <p>We implement technical, administrative, and physical safeguards to protect the confidentiality, integrity, and availability of PHI.</p>
        <h2>2. Business Associate Agreement (BAA)</h2>
        <p>We enter into a Business Associate Agreement with all covered entities to ensure full compliance.</p>
    </LegalLayout>
);
