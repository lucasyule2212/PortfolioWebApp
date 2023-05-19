import React, { ReactNode } from 'react';
import ChanelToolbar from './ChanelToolbar';
import ChanelMessageArea from './ChanelMessageArea';
import ChanelUsersSidebar from './ChanelUsersSidebar';

// import { Container } from './styles';

type ChanelComponentProps = {
  children?: ReactNode;
};

const ChanelComponent: React.FC<ChanelComponentProps> = ({ children }: ChanelComponentProps) => {
  return (
    <main className="flex flex-col bg-discord-gray-3 w-5/6 h-screen">
      <ChanelToolbar />
      <section className="grid grid-cols-5 flex-grow">
        <ChanelMessageArea>{children}</ChanelMessageArea>
        <ChanelUsersSidebar />
      </section>
    </main>
  );
};

export default ChanelComponent;
