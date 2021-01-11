import React from 'react';
import './Portfolio.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PortfolioContent from '../../components/Portfolio/Portfolio';

const Portfolio = () => {
    return (
        <>
          <Navbar /> 
            <PortfolioContent />
          <Footer /> 
        </>
    );
}

export default Portfolio;
