'use client';
import React, { ReactNode } from 'react';
import Meta from './Meta';
import ChannelComponent from './ChannelComponent';
import MainContainer from './MainContainer';
import SidebarChanels from './SidebarChanels';
import SidebarServers from './SidebarServers';
import { useAuthContext } from '@/contexts/AuthContext';
import { useLottie } from 'lottie-react';
import discordLoadingAnimationJson from '../../public/assets/animations/discordLoading.json';
import IntroContainer from './IntroContainer';
// import { Container } from './styles';
type IMainProps = {
  children: ReactNode;
};

const MainLayout: React.FC<IMainProps> = ({ children }: IMainProps) => {
  const { hasGuestUser } = useAuthContext();

  const animationObj = useLottie(
    {
      animationData: discordLoadingAnimationJson,
      loop: true,
      autoplay: true,
    },
    {
      width: 150,
      height: 150,
      position: 'absolute',
    }
  );

  if (!hasGuestUser) {
    return <IntroContainer>{animationObj.View}</IntroContainer>;
  }

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
