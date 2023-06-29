import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Search, X } from 'lucide-react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [hasContent, setHasContent] = useState(false);
  const [value, setValue] = useState(props.value);
  return (
    <div className="flex bg-discord-gray-6 rounded-sm items-center px-2">
      <input
        type={type}
        className={cn(
          'flex h-6 w-full rounded-sm bg-discord-gray-6 py-2 text-xs text-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-discord-gray-0 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        onChange={e => {
          setHasContent(e.target.value.length > 0);
          setValue(e.target.value);
        }}
        value={value}
        {...props}
      />

      <motion.div
        key={hasContent ? 'x-icon' : 'search-icon'}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: -90 }}
        transition={{ duration: 0.1, ease: 'linear' }}
      >
        {hasContent ? (
          <X
            onClick={() => {
              setValue([]);
              setHasContent(false);
            }}
            className="w-[1.15rem] h-[1.15rem] cursor-pointer text-discord-gray-0 hover:text-gray-400"
          />
        ) : (
          <Search className="w-[0.9rem] h-[0.9rem] text-discord-gray-0 hover:text-gray-400" />
        )}
      </motion.div>
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
