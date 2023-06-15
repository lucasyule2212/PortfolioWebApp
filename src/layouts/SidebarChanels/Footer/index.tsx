import ChannelsFooter from '@/components/ChannelsFooter';
import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="bg-discord-gray-5 h-14 mt-auto p-1">
      <ChannelsFooter />
    </footer>
  );
};

export default Footer;
