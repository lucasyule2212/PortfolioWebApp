import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

// import { Container } from './styles';

type ChanelsHeaderDropdownItemProps = {
  variant?: 'default' | 'red' | 'blue';
  title: string;
  icon: React.ReactNode;
};

const ChanelsHeaderDropdownItem: React.FC<ChanelsHeaderDropdownItemProps> = ({
  variant = 'default',
  title,
  icon,
}: ChanelsHeaderDropdownItemProps) => {
  const dropdownMenuItem = cva(
    'flex w-full rounded-sm text-sm font-thin text-gray-100 hover:bg-discord-medium-blue p-2 justify-between',
    {
      variants: {
        variant: {
          default: 'bg-discord-gray-7',
          red: 'text-red-500 hover:bg-red-500 hover:text-primary',
          blue: 'text-discord-light-blue hover:bg-discord-medium-blue hover:text-primary',
        },
      },
      defaultVariants: {
        variant: 'default',
      },
    }
  );
  return (
    <DropdownMenuItem
      className={cn(
        dropdownMenuItem({
          variant,
        })
      )}
    >
      {title}
      {icon}
    </DropdownMenuItem>
  );
};

export default ChanelsHeaderDropdownItem;
