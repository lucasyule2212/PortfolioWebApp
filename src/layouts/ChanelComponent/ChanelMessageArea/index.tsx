import React, { ReactNode } from 'react';

// import { Container } from './styles';
type ChanelMessageAreaProps = {
  children: ReactNode;
};

const ChanelMessageArea: React.FC<ChanelMessageAreaProps> = ({ children }: ChanelMessageAreaProps) => {
  return <div className="col-span-4">{children}</div>;
};

export default ChanelMessageArea;
