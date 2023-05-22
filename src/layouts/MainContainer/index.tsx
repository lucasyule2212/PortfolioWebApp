import React, { ReactNode } from 'react';

// import { Container } from './styles';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }: MainContainerProps) => {
  return <div className="flex w-full h-screen self-center bg-discord-gray-1 rounded-tl-sm ">{children}</div>;
};

export default MainContainer;
