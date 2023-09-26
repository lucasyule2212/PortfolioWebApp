import React from 'react';
import LightningIcon from './LigthningIcon';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

const ChanelsHeaderMenuLabel: React.FC = () => {
  const { t } = useTranslation();
  return (
    <DropdownMenuLabel className="flex gap-2 items-center">
      {t('quick_access')} <LightningIcon />
    </DropdownMenuLabel>
  );
};

export default ChanelsHeaderMenuLabel;
