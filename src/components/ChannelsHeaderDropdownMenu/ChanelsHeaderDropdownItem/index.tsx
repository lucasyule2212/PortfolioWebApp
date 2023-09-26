/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import * as Icons from 'lucide-react';

// import { Container } from './styles';

type ChanelsHeaderDropdownItemProps = {
  variant?: 'default' | 'red' | 'blue';
  title: string;
  icon: string;
  iconIsFill?: boolean;
  onClick: () => void;
};

const ChanelsHeaderDropdownItem: React.FC<ChanelsHeaderDropdownItemProps> = ({
  variant = 'default',
  title,
  icon,
  iconIsFill,
  onClick,
}: ChanelsHeaderDropdownItemProps) => {
  const dropdownMenuItem = cva(
    'flex w-full rounded-sm text-sm font-thin text-gray-100 hover:bg-discord-medium-blue hover:cursor-pointer p-2 justify-between',
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

  // @ts-ignore
  const Icon = Icons[icon];
  return (
    <DropdownMenuItem
      className={cn(
        dropdownMenuItem({
          variant,
        })
      )}
      onClick={onClick}
    >
      {title}
      <Icon className="w-4 h-4" fill={iconIsFill ? 'currentColor' : 'transparent'} />
    </DropdownMenuItem>
  );
};

export default ChanelsHeaderDropdownItem;
