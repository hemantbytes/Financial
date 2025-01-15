import React, { useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import ContactUs from "../components/ContactUs";



export default function Contact  () {
  useEffect(() => {
    document.title = 'Contact - Finanza Financial Services';
  }, []);

  return (
    <>
    <PageHeader title="Contact" />
    <ContactUs />
    </>
  );
}

