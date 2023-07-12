'use client';

import React, { useMemo } from 'react';
import DividerWithDate from '../DividerWithDate';
import clientRoutes from '@/utils/consts/clientRoutes';
import { useRouter } from 'next/router';
import { BiHash } from 'react-icons/bi';

const ChannelHeader: React.FC = () => {
  const router = useRouter();

  const placeHolderWithChannel = useMemo(() => {
    return clientRoutes[router.pathname];
  }, [router.pathname]);

  const ChannelIcon = useMemo(() => {
    if (placeHolderWithChannel?.icon) {
      return placeHolderWithChannel.icon;
    } else {
      return BiHash;
    }
  }, [placeHolderWithChannel]);

  return (
    <section className="relative flex flex-col w-full min-h-[150px] justify-center gap-2 p-4">
      <div className="flex items-center justify-center w-18 h-18 bg-discord-gray-1 rounded-full ">
        <ChannelIcon className="w-14 h-14 text-primary" />
      </div>
      <h1 className="flex text-primary font-semibold text-[1.8rem] items-center z-10 border-1 border-black">
        #{placeHolderWithChannel?.titlePanel}!
      </h1>
      <p className="text-sm text-discord-gray-0">{placeHolderWithChannel?.description}</p>
      <DividerWithDate />
    </section>
  );
};

export default ChannelHeader;
