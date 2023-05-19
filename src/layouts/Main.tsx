import React, { ReactNode } from 'react';
import Meta from './Meta';
import ChanelComponent from './ChanelComponent';
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
        <ChanelComponent>{children}</ChanelComponent>
      </MainContainer>
    </main>
  );
};

export default MainLayout;
