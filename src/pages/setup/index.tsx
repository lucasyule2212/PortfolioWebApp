import ChannelHeader from '@/components/ChannelHeader';
import MainLayout from '@/layouts/Main';
import React from 'react';

// import { Container } from './styles';

const Setup: React.FC = () => {
  return (
    <MainLayout>
      <main>
        <ChannelHeader />
      </main>
    </MainLayout>
  );
};

export default Setup;
