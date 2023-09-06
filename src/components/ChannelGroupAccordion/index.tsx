import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

// import { Container } from './styles';
type ChannelGroupAccordionProps = {
  children?: React.ReactNode;
  title: string;
};

const ChannelGroupAccordion: React.FC<ChannelGroupAccordionProps> = ({
  children,
  title,
}: ChannelGroupAccordionProps) => {
  return (
    <Accordion type="multiple" className="mt-4" defaultValue={['item-1']}>
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="text-xs text-discord-gray-0 font-semibold">{title}</AccordionTrigger>
        <AccordionContent className="flex flex-col justify-center gap-2  px-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ChannelGroupAccordion;
