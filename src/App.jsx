import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Initiatives from './pages/Initiatives';
import Contact from './pages/Contact';

// Products
import BerryForms from './pages/products/BerryForms';
import BerryPlans from './pages/products/BerryPlans';
import BerryTasks from './pages/products/BerryTasks';
import BerryPay from './pages/products/BerryPay';
import BerryReports from './pages/products/BerryReports';
import BerryNerd from './pages/products/BerryNerd';

// Company
import About from './pages/company/About';
import Careers from './pages/company/Careers';

// Legal
import { Privacy, Terms, Hipaa } from './pages/legal/Legal';

// Utils
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/contact" element={<Contact />} />

          {/* Products */}
          <Route path="/products/forms" element={<BerryForms />} />
          <Route path="/products/plans" element={<BerryPlans />} />
          <Route path="/products/tasks" element={<BerryTasks />} />
          <Route path="/products/pay" element={<BerryPay />} />
          <Route path="/products/reports" element={<BerryReports />} />
          <Route path="/products/nerd" element={<BerryNerd />} />

          {/* Company */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />

          {/* Legal */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/hipaa" element={<Hipaa />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
