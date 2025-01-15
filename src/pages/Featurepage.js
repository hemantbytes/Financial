import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Features from '../components/Features';

export default function Featurepage() {
  useEffect(() => {
    document.title = 'Features - Finanza Financial Services';
  }, []);

  return (
    < >
      <PageHeader title="Features"/>
      <Features  />
    </>
  )
}
