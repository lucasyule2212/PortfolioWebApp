import { useGuestUser } from '@/store/GuestUser';
import React, { createContext, useContext } from 'react';

interface AuthContextType {
  hasGuestUser: boolean;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>({} as AuthContextType);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const { guestUser } = useGuestUser();
  const hasGuestUser = guestUser.name !== '';

  return <AuthContext.Provider value={{ hasGuestUser }}>{children}</AuthContext.Provider>;
};

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
