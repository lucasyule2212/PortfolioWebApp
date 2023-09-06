import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChannelGroupAccordion from '@/components/ChannelGroupAccordion';
import TextChannelButton from '@/components/TextChannelButton';
import AudioChannelButton from '@/components/AudioChannelButton';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

// import { Container } from './styles';

const SidebarChanels: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleChannelClick = (route: string) => {
    router.push(route);
  };
  return (
    <div className="flex flex-col h-full w-64 bg-discord-gray-4">
      <Header />
      <ChannelGroupAccordion title={t('sidebarChannels_textChannel1')}>
        <TextChannelButton title={t('channel_home')} onClick={() => handleChannelClick('/home')} />
        <TextChannelButton title={t('channel_about_me')} onClick={() => handleChannelClick('/about')} />
        <TextChannelButton title={t('channel_tech_skills')} onClick={() => handleChannelClick('/tech_skills')} />
        <TextChannelButton
          title={t('channel_professional_xp')}
          onClick={() => handleChannelClick('/professional_experience')}
        />
        <TextChannelButton title={t('channel_personal_projects')} onClick={() => handleChannelClick('/projects')} />
        <TextChannelButton title={t('channel_coding_config')} onClick={() => handleChannelClick('/setup')} />
        <AudioChannelButton title="Lo-fi bot" />
      </ChannelGroupAccordion>
      <Footer />
    </div>
  );
};

export default SidebarChanels;
