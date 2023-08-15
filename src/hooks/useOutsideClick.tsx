import { useCallback, useEffect, MutableRefObject } from 'react';

export const useOutsideClick = (ref: MutableRefObject<any>, callback: () => void) => {
  const handleClick = useCallback(
    (event: { target: any }) => {
      console.log({
        ref,
        event: event.target,
      });

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};
