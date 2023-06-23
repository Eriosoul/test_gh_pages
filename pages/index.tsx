import React from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Animated from '../components/Animated';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Projects2 from '../components/Projects2';

type Props = {}

export default function Home() {
  return (
    <div className="bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Andrei Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}
      <Header />
      {/** Hero - Circles */}
      <section id="hero" className='snap-start'/>
      <Hero />
      {/** About section */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="animated" className='snap-center'>
        <Animated />
      </section>
      <section id="projects" className='snap-center'>
        <Projects />
      </section>
      <section id="project2" className='snap-center'>
        <Projects2 />
      </section>
      <section id="contactme" className='snap-center'>
        <ContactMe />
      </section>
    </div>
  );
}