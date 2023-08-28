'use client';
import MainChannelHeader from '@/components/MainChannelHeader';
import MessageComponent from '@/components/MessageComponent';
import MessageAreaContainer from '@/layouts/ChannelComponent/MessageAreaContainer';
import MainLayout from '@/layouts/Main';
// import { useMemo } from 'react';

const Home = () => {
  // const messages = useMemo(() => {
  //   return [];
  // }, []);

  return (
    <MainLayout>
      <MessageAreaContainer>
        <MainChannelHeader />
        <MessageComponent
          username="lyrma"
          user_image_url=""
          content="<p>
      Testing component
      </p>"
        />
      </MessageAreaContainer>
    </MainLayout>
  );
};

export default Home;
