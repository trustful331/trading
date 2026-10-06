export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthState = {
  user: AuthUser | null;
  token: string;
  currentRole: string | null;
};
