import React, { ReactNode } from 'react';
import Meta from './Meta';

// import { Container } from './styles';
type IMainProps = {
  children: ReactNode;
};

const Main: React.FC<IMainProps> = ({ children }: IMainProps) => {
  return (
    <main className="container flex h-screen pl-18">
      <Meta />
      {children}
    </main>
  );
};

export default Main;
