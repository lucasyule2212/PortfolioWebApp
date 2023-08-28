'use client';
import React from 'react';

// import { Container } from './styles';

type IntroContainerProps = {
  children: React.ReactNode;
};

const IntroContainer: React.FC<IntroContainerProps> = ({ children }: IntroContainerProps) => {
  return <main className="w-[100vw] h-[100vh] bg-discord-gray-4 flex items-center justify-center">{children}</main>;
};

export default IntroContainer;
