import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChannelGroupAccordion from '@/components/ChannelGroupAccordion';
import TextChannelButton from '@/components/TextChannelButton';

// import { Container } from './styles';

const SidebarChanels: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-64 bg-discord-gray-4">
      <Header />
      <ChannelGroupAccordion title="CANAIS DE TEXTO">
        <TextChannelButton title="Projetos" />
      </ChannelGroupAccordion>
      <Footer />
    </div>
  );
};

export default SidebarChanels;
