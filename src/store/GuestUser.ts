import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type GuestUser = {
  name: string;
  username: string;
  email: string;
  language: string;
};

interface GuestUserStore {
  guestUser: GuestUser;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setLanguage: (language: string) => void;
}

export const useGuestUser = create(
  immer<GuestUserStore>(set => ({
    guestUser: {
      name: '',
      username: '',
      email: '',
      language: '',
    },
    setName: name => {
      set(state => {
        state.guestUser.name = name;
      });
    },
    setUsername: username => {
      set(state => {
        state.guestUser.username = username;
      });
    },
    setEmail: email => {
      set(state => {
        state.guestUser.email = email;
      });
    },
    setLanguage(language) {
      set(state => {
        state.guestUser.language = language;
      });
    },
  }))
);
