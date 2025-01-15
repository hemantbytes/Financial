import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Project from '../components/Project';

export default function Projectpage() {
  
  useEffect(() => {
    document.title = 'Project - Finanza Financial Services';
  }, []);

  return (
    < >
      <PageHeader title="Projects" />
      <Project  />
    </>
  )
}
