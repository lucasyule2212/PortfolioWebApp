import ChannelsHeaderDropdownMenu from '@/components/ChannelsHeaderDropdownMenu';
import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className="bg-discord-gray-4 h-12 shadow-bottom ">
      <ChannelsHeaderDropdownMenu />
    </header>
  );
};

export default Header;
