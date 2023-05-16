import React from 'react';
import Header from './Header';
import Footer from './Footer';

// import { Container } from './styles';

const SidebarChanels: React.FC = () => {
  return (
    <div className="flex flex-col w-60 bg-discord-gray-3 justify-between">
      <Header />
      <Footer />
    </div>
  );
};

export default SidebarChanels;
