import React from "react";
import "./Home.css";

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Services />
     <Projects />
     <Contact />
     <Footer />
    </>
  );
};

export default Home;
