'use client';
import { Button } from '@/components/ui/button';
import { ChevronDown, X } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// import { Container } from './styles';
type ChanelsHeaderButtonProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

const ChanelsHeaderButton: React.FC<ChanelsHeaderButtonProps> = ({ onOpenChange, open }) => {
  return (
    <DropdownMenuTrigger className="w-full h-full" asChild>
      <Button
        onClick={() => onOpenChange(!open)}
        className={`  
  w-full
  h-full
  hover:bg-discord-gray-2      
  flex
  items-center
  justify-between
  px-4
  text-sm
  text-primary
  font-semibold
  focus:outline-none
  ${open ? 'bg-discord-gray-2' : ' bg-transparent'}   
  rounded-none
`}
      >
        Lucas Yule - Portfolio
        <motion.div transition={{ duration: 0.2 }}>
          {open ? (
            <X className="w-4 h-4 mr-1 text-gray-400" strokeWidth={3} />
          ) : (
            <ChevronDown className="w-4 h-4 mr-1 text-gray-400" strokeWidth={3} />
          )}
        </motion.div>
      </Button>
    </DropdownMenuTrigger>
  );
};

export default ChanelsHeaderButton;
