import React, { useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import AboutUs from "../components/AboutUs";
import Facts from "../components/Facts";
import Team from "../components/Team";

export default function About () {
  useEffect(() => {
    document.title = 'About - Finanza Financial Services';
  }, []);
  
  return (
    <>
    <PageHeader title="About" />
    <AboutUs  />
    <Facts />
    <Team />
    </>
  );
}


