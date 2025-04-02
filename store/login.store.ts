import { create } from 'zustand';

interface AuthState {
  userName: string | null;
  userAvatar: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  login: (params: {
    userName: string;
    userAvatar: string;
    accessToken: string;
    refreshToken: string;
  }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  userName: null,
  userAvatar: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,

  login: ({ userName, userAvatar, accessToken, refreshToken }) =>
    set({ userName, userAvatar, accessToken, refreshToken, isAuthenticated: true }),
  logout: () =>
    set({ userName: null, userAvatar: null, accessToken: null, refreshToken: null, isAuthenticated: false }),
}));

export default useAuthStore;
