import React from 'react';
import ClientSection from './ClientSection/ClientSection';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import ProductSection from './ProducSection/ProductSection';
import ShowCustomerDetails from './ShowCustomerDetails/ShowCustomerDetails';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ClientSection />
            <ProductSection />
            <ShowCustomerDetails />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;