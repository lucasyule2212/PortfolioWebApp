import clientRoutes from '@/utils/consts/clientRoutes';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { BiHash } from 'react-icons/bi';

// import { Container } from './styles';

const ChannelToolbarTitle: React.FC = () => {
  const router = useRouter();
  const pageTitle = useMemo(() => {
    const path = router.pathname;
    const title = clientRoutes[path]?.titlePanel;
    return title;
  }, [router.pathname]);

  return (
    <div className="flex gap-2 items-center ml-1">
      <BiHash className="text-discord-gray-0" size={28} />
      <span className="text-primary font-semibold text-sm">{pageTitle}</span>
    </div>
  );
};

export default ChannelToolbarTitle;
