import React from 'react';
import Header from '../Header';

const PageWrapper: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default PageWrapper;
