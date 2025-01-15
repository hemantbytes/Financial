import React, { useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import Testimonial from "../components/Testimonial";

export default function Testimonal () {
  useEffect(() => {
    document.title = 'Testimonal - Finanza Financial Services';
  }, []);

  return (
    <>
     <PageHeader title="Testimonal" />
    <Testimonial />

    </>
  );
}



