import React, { ReactNode } from 'react';
import ChannelToolbar from './ChannelToolbar';
import ChannelMessageArea from './ChannelMessageArea';
import ChannelUsersSidebar from './ChannelUsersSidebar';

// import { Container } from './styles';

type ChannelComponentProps = {
  children?: ReactNode;
};

const ChannelComponent: React.FC<ChannelComponentProps> = ({ children }: ChannelComponentProps) => {
  return (
    <main className="flex flex-col bg-discord-gray-3 w-5/6 h-screen">
      <ChannelToolbar />
      <section className="grid grid-cols-5 flex-grow">
        <ChannelMessageArea>{children}</ChannelMessageArea>
        <ChannelUsersSidebar />
      </section>
    </main>
  );
};

export default ChannelComponent;
