import React, { useEffect } from 'react';
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Service from "../components/Service";
import Callback from "../components/Callback";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Facts from "../components/Facts";



export default function Home () {
    useEffect(() => {
      document.title = 'Finanza - Financial Services';
    }, []);

  return (
    <>
    <Hero />
    <AboutUs />
    <Facts />
    <Features />
    <Service />
    <Callback />
    <Projects />
    <Team />
    <Testimonial />

    </>
  );
}
