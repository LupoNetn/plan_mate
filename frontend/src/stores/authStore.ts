import {create} from 'zustand'

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  setUser: (user: User) => void;
  setAccessToken: (token: string) => void;
  clearAuth: () => void;
}


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    setUser: (user) => set({ user }),
    setAccessToken: (token) => set({accessToken: token}),
    clearAuth: () => set({user: null,accessToken:null})
})) 