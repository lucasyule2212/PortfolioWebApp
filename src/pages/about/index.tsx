import ChannelHeader from '@/components/ChannelHeader';
import MessageComponent from '@/components/MessageComponent';
import MessageAreaContainer from '@/layouts/ChannelComponent/MessageAreaContainer';
import MainLayout from '@/layouts/Main';
import { Message, fetchHygraphQuery } from '@/utils/fetchHygraphQuery';
import React from 'react';
import { useTranslation } from 'react-i18next';

const getPageData = () => {
  const query = `
  query HomeQuery {
    messages(where: {slug_contains: "about"}) {
      localizations(locales: [en, pt_BR], includeCurrent: true) {
        content {
          html
        }
      }
      reactions
      id
    }
  }
  `;
  return fetchHygraphQuery({ query });
};

const About = ({ messages }: { messages: Message[] }) => {
  const { i18n } = useTranslation();

  return (
    <MainLayout>
      <MessageAreaContainer>
        <ChannelHeader />
        {messages &&
          messages.map(message => (
            <MessageComponent
              key={message.id}
              username={'lucas_yule'}
              user_image_url=""
              content={message.content[i18n.language] || ''}
              reactions={message.reactions}
            />
          ))}
      </MessageAreaContainer>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const messages = await getPageData();

  return {
    props: {
      messages,
    },
  };
}

export default About;
