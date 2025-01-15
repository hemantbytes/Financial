import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerImage from '../img/header.jpg';


export default function PageHeader  ({ title })  {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter((path) => path !== '');
    let currentPath = '';
    return paths.map((path, index) => {
      currentPath += `/${path}`;
      const breadcrumbName = path.charAt(0).toUpperCase() + path.slice(1);
      if (index === paths.length - 1) {
        return (
          <li key={index} className="breadcrumb-item active" aria-current="page">
            {breadcrumbName}
          </li>
        );
      }
      return (
        <li key={index} className="breadcrumb-item">
          <Link to={currentPath}>{breadcrumbName}</Link>
        </li>
      );
    });
  };

  return (
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/pages">Pages</Link>
            </li>
            {generateBreadcrumbs()}
          </ol>
        </nav>
      </div>
    </div>
  );
};

