import React from 'react';
import Header from '@/components/header';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
