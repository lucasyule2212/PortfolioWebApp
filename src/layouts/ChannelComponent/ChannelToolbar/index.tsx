import ChannelToolbarButtonSuite from '@/components/ChannelToolbarButtonSuite';
import ChannelToolbarTitle from '@/components/ChannelToolbarTitle';
import React from 'react';

// import { Container } from './styles';

const ChannelToolbar: React.FC = () => {
  return (
    <div className="flex h-12 shadow-bottom z-10 p-2 items-center justify-between">
      <ChannelToolbarTitle />
      <ChannelToolbarButtonSuite />
    </div>
  );
};

export default ChannelToolbar;
