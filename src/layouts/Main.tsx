import React, { ReactNode } from 'react';
import Meta from './Meta';

// import { Container } from './styles';
type IMainProps = {
  children: ReactNode;
};

const Main: React.FC<IMainProps> = ({ children }: IMainProps) => {
  return (
    <main>
      <Meta />
      {children}
    </main>
  );
};

export default Main;
