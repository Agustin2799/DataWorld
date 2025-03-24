import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Contacto from '../components/Contacto'
import Lema from '../components/Lema';

const Home = () => {
  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20 bg-black/70">
        <Header />
        <About />
        <Services />
      </div>
      <Lema />
      <div className="px-5 sm:px-10 lg:px-20 bg-black/70">
        <Contacto />
      </div>
    </>
  );
}

export default Home