import MainChannelHeader from '@/components/MainChannelHeader';
import MessageComponent from '@/components/MessageComponent';
import { usePageData } from '@/hooks/usePageData';
import MessageAreaContainer from '@/layouts/ChannelComponent/MessageAreaContainer';
import MainLayout from '@/layouts/Main';
// import { useMemo } from 'react';

const Home = () => {
  const { data: messages } = usePageData({ page: 'home' });

  return (
    <MainLayout>
      <MessageAreaContainer>
        <MainChannelHeader />
        {messages &&
          messages.map(message => (
            <MessageComponent
              key={message._id}
              username={'lucas_yule'}
              user_image_url=""
              content={message.content}
              reactions={message.reactions}
            />
          ))}
      </MessageAreaContainer>
    </MainLayout>
  );
};

export default Home;
