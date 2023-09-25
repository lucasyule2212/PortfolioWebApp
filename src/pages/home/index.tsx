import MainChannelHeader from '@/components/MainChannelHeader';
import MessageComponent from '@/components/MessageComponent';
import MessageAreaContainer from '@/layouts/ChannelComponent/MessageAreaContainer';
import MainLayout from '@/layouts/Main';
import { Message, fetchHygraphQuery } from '@/utils/fetchHygraphQuery';
import { useTranslation } from 'react-i18next';
// import { useMemo } from 'react';
const getPageData = () => {
  const query = `
  query HomeQuery {
    messages(where: {slug_contains: "home"}) {
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

const Home = ({ messages }: { messages: Message[] }) => {
  const { i18n } = useTranslation();

  return (
    <MainLayout>
      <MessageAreaContainer>
        <MainChannelHeader />
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

export default Home;
