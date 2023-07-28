import React, { ReactNode } from 'react';
import MessageInput from '@/components/MessageInput';

// import { Container } from './styles';
type ChannelMessageAreaProps = {
  children: ReactNode;
};

const ChannelMessageArea: React.FC<ChannelMessageAreaProps> = ({ children }: ChannelMessageAreaProps) => {
  return (
    <div className={`flex flex-col-reverse col-span-4 relative`}>
      <MessageInput />
      {children}
    </div>
  );
};

export default ChannelMessageArea;
