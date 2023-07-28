'use client';
import MainChannelHeader from '@/components/MainChannelHeader';
import MessageComponent from '@/components/MessageComponent';
import MessageAreaContainer from '@/layouts/ChannelComponent/MessageAreaContainer';
// import { useMemo } from 'react';

const Index = () => {
  // const messages = useMemo(() => {
  //   return [];
  // }, []);

  return (
    <MessageAreaContainer>
      <MainChannelHeader />
      <MessageComponent />
    </MessageAreaContainer>
  );
};

export default Index;
