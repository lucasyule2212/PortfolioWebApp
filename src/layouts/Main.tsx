import React, { ReactNode } from 'react';
import Meta from './Meta';
import ChannelComponent from './ChannelComponent';
import MainContainer from './MainContainer';
import SidebarChanels from './SidebarChanels';
import SidebarServers from './SidebarServers';

// import { Container } from './styles';
type IMainProps = {
  children: ReactNode;
};

const MainLayout: React.FC<IMainProps> = ({ children }: IMainProps) => {
  return (
    <main className="container flex h-screen">
      <Meta />
      <MainContainer>
        <SidebarServers />
        <SidebarChanels />
        <ChannelComponent>{children}</ChannelComponent>
      </MainContainer>
    </main>
  );
};

export default MainLayout;
