import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChannelGroupAccordion from '@/components/ChannelGroupAccordion';
import TextChannelButton from '@/components/TextChannelButton';
import AudioChannelButton from '@/components/AudioChannelButton';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import DevTooltip from '@/components/DevTooltip';

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
        <TextChannelButton title={t('channel_home')} handleClick={handleChannelClick} route={'/home'} />
        <TextChannelButton title={t('channel_about_me')} handleClick={handleChannelClick} route={'/about'} />
        <TextChannelButton title={t('channel_tech_skills')} handleClick={handleChannelClick} route={'/tech_skills'} />
        <TextChannelButton
          title={t('channel_professional_xp')}
          handleClick={handleChannelClick}
          route={'/professional_experience'}
        />
        <TextChannelButton
          title={t('channel_personal_projects')}
          handleClick={handleChannelClick}
          route={'/projects'}
        />
        <TextChannelButton title={t('channel_coding_config')} handleClick={handleChannelClick} route={'/setup'} />
        {/* IN DEVELOPMENT TOOLTIP */}
        <DevTooltip>
          <AudioChannelButton title="Lo-fi bot" />
        </DevTooltip>
      </ChannelGroupAccordion>
      <Footer />
    </div>
  );
};

export default SidebarChanels;
