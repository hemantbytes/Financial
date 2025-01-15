import React, { useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import Service from "../components/Service";

export default function Services  ()  {
  useEffect(() => {
    document.title = 'Services - Finanza Financial Services';
  }, []);

  return (
    <>
    <PageHeader title="Services" />
    <Service />

    </>
  );
}


