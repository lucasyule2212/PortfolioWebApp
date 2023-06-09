import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

// import { Container } from './styles';

const ChannelGroupAccordion: React.FC = () => {
  return (
    <Accordion type="multiple" className="mt-4">
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="text-xs text-discord-gray-0 font-semibold">CANAIS DE TEXTO</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ChannelGroupAccordion;
