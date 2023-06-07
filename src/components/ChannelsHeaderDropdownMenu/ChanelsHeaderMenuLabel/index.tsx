import React from 'react';
import LightningIcon from './LigthningIcon';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';

// import { Container } from './styles';

const ChanelsHeaderMenuLabel: React.FC = () => {
  return (
    <DropdownMenuLabel className="flex gap-2 items-center">
      Quick Access <LightningIcon />
    </DropdownMenuLabel>
  );
};

export default ChanelsHeaderMenuLabel;
