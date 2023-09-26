import { GuestUser, useGuestUser } from '@/store/GuestUser';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect } from 'react';

interface AuthContextType {
  hasGuestUser: boolean;
  setGuestUserToLocalStorage: (guestUser: GuestUser) => void;
  removeGuestUserFromLocalStorage: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>({} as AuthContextType);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const { setGuestUser } = useGuestUser();
  const [hasGuestUser, setHasGuestUser] = React.useState<boolean>(false);
  const router = useRouter();

  const setGuestUserToLocalStorage = (guestUser: GuestUser) => {
    localStorage.setItem('guestUser', JSON.stringify(guestUser));
  };

  const removeGuestUserFromLocalStorage = () => {
    localStorage.removeItem('guestUser');
  };

  useEffect(() => {
    // get guest user from local storage
    const guestUserFromLocalStorage = localStorage.getItem('guestUser');
    if (guestUserFromLocalStorage) {
      const parsedGuestUser = JSON.parse(guestUserFromLocalStorage);
      if (parsedGuestUser) {
        setGuestUser(parsedGuestUser);
        setHasGuestUser(true);
      }
    } else {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [router, setGuestUser]);

  return (
    <AuthContext.Provider value={{ hasGuestUser, setGuestUserToLocalStorage, removeGuestUserFromLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
