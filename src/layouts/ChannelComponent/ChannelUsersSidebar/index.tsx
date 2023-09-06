import ChannelUserSidebarUserCard from '@/components/ChannelUserSidebarUserCard';
import { useGuestUser } from '@/store/GuestUser';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const ChannelUsersSidebar: React.FC = () => {
  const { guestUser } = useGuestUser();
  const { t } = useTranslation();
  return (
    <div className=" bg-discord-gray-4 pt-6 px-4 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-discord-gray-0 text-xs">{t('channelUserSidebar_title')} - </span>
        <span className="text-discord-gray-0 text-xs">2</span>
      </div>
      <ChannelUserSidebarUserCard label="Lucas Yule" isServerOwner={true} />
      <ChannelUserSidebarUserCard label={guestUser.username} />
    </div>
  );
};

export default ChannelUsersSidebar;
