import React from 'react';
import Header from './Header';
import Footer from './Footer';

// import { Container } from './styles';

const SidebarChanels: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-discord-gray-4 justify-between">
      <Header />
      <Footer />
    </div>
  );
};

export default SidebarChanels;
