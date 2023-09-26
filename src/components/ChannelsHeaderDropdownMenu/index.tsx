'use client';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import ChanelsHeaderButton from './ChanelsHeaderButton';
import ChanelsHeaderMenuLabel from './ChanelsHeaderMenuLabel';
import ChanelsHeaderDropdownItem from './ChanelsHeaderDropdownItem';
import { useGuestUser } from '@/store/GuestUser';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const ChannelsHeaderDropdownMenu: React.FC = () => {
  const { t } = useTranslation();
  const { resetGuestUser } = useGuestUser();
  const { removeGuestUserFromLocalStorage } = useAuthContext();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean | ((prevState: boolean) => boolean)) => {
    setIsOpen(open);
  };

  const handleOpenExternalLink = (externalLink: string) => {
    const link = document.createElement('a');
    link.href = externalLink;
    link.target = '_blank';
    link.click();
  };

  const handleLogout = () => {
    resetGuestUser();
    removeGuestUserFromLocalStorage();
    router.push('/');
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <ChanelsHeaderButton open={isOpen} onOpenChange={setIsOpen} />
      <DropdownMenuContent className="flex flex-col items-center bg-discord-gray-7 text-gray-400 border-none mt-1 text-xs w-56 p-2">
        <ChanelsHeaderMenuLabel />
        <DropdownMenuSeparator className="w-[100%] bg-discord-gray-4 h-[0.1px]" />
        <ChanelsHeaderDropdownItem
          title={t('project_repository')}
          icon="FolderGit2"
          onClick={() => handleOpenExternalLink('https://github.com/lucasyule2212/PortfolioWebApp')}
        />
        <ChanelsHeaderDropdownItem
          variant="blue"
          title={t('online_cv')}
          icon="FileText"
          onClick={() =>
            handleOpenExternalLink(
              'https://docs.google.com/document/d/1ML9PD-OpxToWkxm_z4pxIj7epQZvW5dy0Qg04bRaDso/edit?usp=sharing'
            )
          }
        />
        <DropdownMenuSeparator className="w-[100%] bg-discord-gray-4 h-[0.1px]" />
        <ChanelsHeaderDropdownItem variant="red" title={t('logout')} icon="LogOut" onClick={handleLogout} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChannelsHeaderDropdownMenu;
