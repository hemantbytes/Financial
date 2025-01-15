import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';

export default function TeamMember() {

  useEffect(() => {
    document.title = 'Team-member - Finanza Financial Services';
  }, []);

  return (
    < >
      <PageHeader title="Team Member" />
      <Team />
    </>
  )
}
