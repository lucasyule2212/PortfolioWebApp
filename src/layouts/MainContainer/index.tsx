import React, { ReactNode } from 'react';

// import { Container } from './styles';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }: MainContainerProps) => {
  return <div className="flex w-full h-full self-center bg-discord-gray-1 rounded-tl-sm p">{children}</div>;
};

export default MainContainer;
