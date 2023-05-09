import React, { ReactNode } from 'react';

// import { Container } from './styles';
type IMainProps = {
  children: ReactNode;
  meta: ReactNode;
};

const Main: React.FC<IMainProps> = ({ meta, children }: IMainProps) => {
  return (
    <div>
      {meta}
      {children}
    </div>
  );
};

export default Main;
