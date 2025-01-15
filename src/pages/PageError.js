import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader'
import Page404 from '../components/Page404';


export default function PageError() {
  
  useEffect(() => {
    document.title = '404-Page - Finanza Financial Services';
  }, []);

  return (
    <>
      <PageHeader title="404 Error" />
      <Page404 />
    </>
  )
}
